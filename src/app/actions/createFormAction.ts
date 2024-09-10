'use server';

import connection from '@/app/libs/db';

export async function createFormAction(formData: FormData) {
	// function removes special characters from input strings so they match the database schema
	function sanitizeInput(input: string): string {
		return input.replace(/[^\w\s]/g, '');
	}

	// assigning the form data to variables
	const title = formData.get('Title') as string;
	const subject = formData.get('Subject') as string;
	const question = formData.get('Question') as string;
	const answer = formData.get('Answer') as string;

	// reformat the input
	const sanitizedTitle = sanitizeInput(title);
	const sanitizedSubject = sanitizeInput(subject);

	try {
		const response = await fetch('https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.OPEN_AI_KEY}`, // Replace with your actual API key
			},
			body: JSON.stringify({
				model: 'gpt-4',
				messages: [
					{
						role: 'system',
						content: `All you do is generate 3 answers to each given question. Make sure they are close enough to 
                                    be a possible correct answer, but not close enough to where they will be confused with the correct 
                                    answer often. I want answers to be as short as possible. I don't want any commentary about the answer 
                                    or explanations, just the answer. No more, no less. Return your answers as a JSON array.`,
					},
					{
						role: 'user',
						content: `Question: ${question}, answer: ${answer}`,
					},
				],
			}),
		});

		const data = await response.json();
		console.log('API RESPONSE: ', data);

		if (data.choices && data.choices.length > 0) {
			const generatedAnswers = JSON.parse(data.choices[0].message.content);

			// Query the database to insert the form data and generated answers
			const query = new Promise<void>((resolve, reject) => {
				connection.query(
					'INSERT INTO quizzes SET ?',
					{
						title: sanitizedTitle,
						subject: sanitizedSubject,
						question,
						answer,
						generated_answers: JSON.stringify(generatedAnswers), // Save generated answers as JSON
					},
					(err) => {
						if (err) {
							console.error('Database insertion error:', err);
							reject(new Error('Failed to insert data'));
						} else {
							console.log('Form data inserted successfully');
							resolve();
						}
					}
				);
			});

			// Await the database insertion query
			await query;
			return generatedAnswers;
		} else {
			throw new Error('No valid answers from OpenAI');
		}
	} catch (error) {
		console.error('Error processing form:', error);
		return [];
	}
}

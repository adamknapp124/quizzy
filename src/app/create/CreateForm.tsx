'use client';

import { useState, useEffect } from 'react';
import { createFormAction } from '@/app/actions/createFormAction';
import Input from '../components/Input';
import CustomButton from '@/app/components/CustomButton';

export default function CreateForm() {
	const [extraQuestions, setExtraQuestions] = useState<number>(0);
	const [formValues, setFormValues] = useState({
		Title: '',
		Subject: '',
		Question: '',
		Answer: '',
	});

	const handleReset = (): void => {
		setFormValues({
			Title: '',
			Subject: '',
			Question: '',
			Answer: '',
		});
		setExtraQuestions(0);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setFormValues((prevValues) => ({
			...prevValues,
			[id]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('Title', formValues.Title);
		formData.append('Subject', formValues.Subject);
		formData.append('Question', formValues.Question);
		formData.append('Answer', formValues.Answer);

		await createFormAction(formData);

		setExtraQuestions((prev) => prev + 1);
		setFormValues({
			Title: formValues.Title,
			Subject: formValues.Subject,
			Question: '',
			Answer: '',
		});
	};

	useEffect(() => {}, [extraQuestions]);

	return (
		<div className='h-full w-full px-2'>
			<form
				onSubmit={handleSubmit}
				className='w-full p-2 m-auto font-body font-bold rounded-lg h-full flex flex-col gap-2 font-quiz'>
				<Input
					id='Title'
					type='text'
					required={true}
					placeholder='Name the quiz'
					value={formValues.Title}
					onChange={handleChange}
					disabled={extraQuestions > 0}
				/>

				<Input
					id='Subject'
					type='text'
					required={true}
					placeholder='What class is this for?'
					value={formValues.Subject}
					onChange={handleChange}
					disabled={extraQuestions > 0}
				/>

				<Input
					id='Question'
					type='text'
					required={true}
					placeholder='Write your quiz question here'
					value={formValues.Question}
					onChange={handleChange}
				/>

				<Input
					id='Answer'
					type='text'
					required={true}
					placeholder="What's the correct answer?"
					value={formValues.Answer}
					onChange={handleChange}
				/>

				<hr className='m-2' />

				<div className='flex flex-col justify-between p-2 gap-2'>
					<CustomButton
						classes='px-8 py-3 rounded-lg bg-white border border-navBackground text-black flex items-center justify-center text-xl'
						onClick={handleReset}
						name='Reset'
						type='reset'
					/>
					<CustomButton
						name={
							extraQuestions === 0
								? 'Create'
								: 'Add Question to Current Quiz'
						}
						type='submit'
						classes='bg-navBackground text-white font-extrabold text-xl'
					/>
				</div>
			</form>
		</div>
	);
}

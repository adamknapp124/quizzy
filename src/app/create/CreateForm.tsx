'use client';

import { useState, useEffect } from 'react';
import { createFormAction } from '@/app/actions/createFormAction';
import Input from '../components/Input';
import Button from '../components/SubmitButton';

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
		<form
			onSubmit={handleSubmit}
			className='w-1/2 m-auto font-body font-bold bg-sky-950 p-5 rounded-lg'>
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

			<div className='flex justify-between p-2'>
				<div
					className='px-8 py-3 border border-white rounded-lg bg-yellow-600 flex items-center justify-center'
					onClick={handleReset}>
					Reset
				</div>
				<Button
					type='submit'
					label={
						extraQuestions === 0 ? 'Create' : 'Add Question to Current Quiz'
					}
				/>
			</div>
		</form>
	);
}

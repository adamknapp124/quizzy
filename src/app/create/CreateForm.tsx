'use client';

import { useState, useEffect } from 'react';
import { createFormAction } from '@/app/actions/createFormAction';
import Input from '../components/Input';
import ActionButton from '@/app/components/buttons/ActionButton';

import clsx from 'clsx';

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
		<div className='w-full h-screen m-auto items-center justify-between flex flex-col max-w-[1100px]'>
			<div className='h-full w-full px-2'>
				<form
					onSubmit={handleSubmit}
					className='w-full p-2 m-auto font-body font-bold rounded-lg h-full flex flex-col gap-2 font-quiz'>
					<Input
						id='Title'
						type='text'
						required={true}
						placeholder='Name'
						value={formValues.Title}
						onChange={handleChange}
						disabled={extraQuestions > 0}
						classes='hover:bg-sky-300'
					/>
					<Input
						id='Subject'
						type='text'
						required={true}
						placeholder='Subject'
						value={formValues.Subject}
						onChange={handleChange}
						disabled={extraQuestions > 0}
						classes='hover:bg-sky-300'
					/>
					<Input
						id='Question'
						type='text'
						required={true}
						placeholder='Question'
						value={formValues.Question}
						onChange={handleChange}
						classes='hover:bg-sky-300'
					/>
					<Input
						id='Answer'
						type='text'
						required={true}
						placeholder='Answer'
						value={formValues.Answer}
						onChange={handleChange}
						classes='hover:bg-sky-300'
					/>
					<div className='flex flex-col justify-between p-2 gap-2'>
						<ActionButton
							classes='rounded-lg bg-white border border-transparent hover:border-sky-600 shadow-xl text-black flex items-center justify-center text-xl'
							onClick={handleReset}
							name='Reset'
							type='reset'
						/>
						<ActionButton
							name={
								extraQuestions === 0
									? 'Create'
									: 'Add Question to Current Quiz'
							}
							type='submit'
							classes='bg-sky-600 hover:border-white shadow-xl border border-transparent text-white font-extrabold text-xl'
						/>
					</div>
				</form>
			</div>
		</div>
	);
}

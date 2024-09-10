import React from 'react';

interface InputProps {
	id: string;
	type: string;
	required: boolean;
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
	disabled?: boolean;
}

export default function Input({
	id,
	type,
	required,
	placeholder,
	onChange,
	disabled,
	value = '',
}: InputProps) {
	return (
		<div className='flex flex-col w-full p-2'>
			<label
				htmlFor={id}
				className=''>
				{id}
			</label>
			<div className='p-1 w-full rounded-lg bg-yellow-500'>
				<input
					type={type}
					id={id}
					name={id}
					required={required}
					className='text-black p-2 rounded-lg w-full'
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					disabled={disabled}
				/>
			</div>
		</div>
	);
}

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
		<div className='bg-[#C4C0B5] p-1 rounded-lg'>
			<div className='p-1 w-full rounded-lg h-[75px] flex items-center justify-center'>
				<input
					type={type}
					id={id}
					name={id}
					required={required}
					className='text-black p-2 rounded-lg w-full h-full'
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					disabled={disabled}
				/>
			</div>
		</div>
	);
}

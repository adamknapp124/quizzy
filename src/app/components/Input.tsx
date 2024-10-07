import React from 'react';

import clsx from 'clsx';

interface InputProps {
	id: string;
	type: string;
	required: boolean;
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
	disabled?: boolean;
	classes?: string;
}

export default function Input({
	id,
	type,
	classes,
	required,
	placeholder,
	onChange,
	disabled,
	value = '',
}: InputProps) {
	return (
		<div className={clsx(`bg-shadow p-1 rounded-lg`, classes)}>
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

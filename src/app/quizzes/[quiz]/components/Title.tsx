import React from 'react';

interface TitleProps {
	title: string;
}

export default function Title({ title }: TitleProps) {
	return <div className='font-body capitalize font-bold text-xl'>{title}</div>;
}

import React from 'react';

import CustomButton from '@/app/components/CustomButton';

export default function BeginOrNew() {
	return (
		<div className='flex gap-2'>
			<CustomButton name='Begin Quiz' />
			<CustomButton name='+ New Quiz' />
		</div>
	);
}

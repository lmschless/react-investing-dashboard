import React, { useState } from 'react';

export default function SimpleFormHook() {
	const [ email, setEmail ] = useState('');
	return (
		<div>
			<h1>The value is...</h1>
			<input
				type="text"
				value={email}
				onChange={(email) => {
					setEmail(e.target.value); // set email to be what the user types in
				}}
			/>
		</div>
	);
}

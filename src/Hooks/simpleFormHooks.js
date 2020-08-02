import React, { useState } from 'react';

export default function SimpleFormHooks() {
	const [ email, setEmail ] = useState('');
	return (
		<div>
			<h1>The value is...</h1>
			<input type="text" value={email} onChange={setEmail(email)} />
		</div>
	);
}

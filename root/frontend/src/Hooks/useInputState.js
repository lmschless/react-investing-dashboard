import { useState } from 'react';

// custom hook to set values from forms and handle changes in forms (set back to empty string)
export default (initialVal) => {
	const [ value, setValue ] = useState(initialVal);
	const handleChange = (e) => {
		setValue(e.target.value);
	};
	const reset = () => {
		setValue('');
	};
	// Return the value that is passed in and TWO functions that can modify it
	// Hooks usually return an array
	return [ value, handleChange, reset ];
};

// EXAMPLE use case
// const [age, handleAgeChange, resetAge] = useFormState(31);
// very easy to reuse custom hook for multiple form inputs

import { useState } from 'react';
// start function with initivalVal or false if no value is passed in.
// convention is to start custom hooks with "use"
function useAlert(error = false, message = '') {
	// call useState, "reserve piece of state"
	const [ state, setState ] = useState(error);
	const toggle = () => {
		setState(!state); // using a generic state here so useToggle can be reused
	};
	// hooks return a piece of state and the function that is modifying that state (toggle)
	return [ state, toggle ];
}
export default useAlert;

// import React, { useState } from 'react';

// // bad way of making a custom hook. hard to reuse, not generic enough
// // and would have to be created in each component.
// function Toggler() {
// 	const [ isDog, setDog ] = useState(true);
// 	const [ isHappy, setIsHappy ] = useState(false);
// 	return (
// 		<div>
// 			<h1
// 				onClick={() => {
// 					setDog(!isDog);
// 				}}
// 			>
// 				{isDog ? 'Dog!!' : 'Not a Dog!'}
// 			</h1>
// 			<h1
// 				onClick={() => {
// 					setIsHappy(!isHappy);
// 				}}
// 			>
// 				{isHappy ? 'Happy!' : 'Not happy yet!'}
// 			</h1>
// 		</div>
// 	);
// }

// custom hook that toggles between true and false on click
// store in a hooks folder and import it into each component as needed.

// define a function
// call useState AND a function to toggle it
import { useState } from 'react';
// start function with initivalVal or false if no value is passed in.
function useToggle(initialVal = false) {
	// call useState, "reserve piece of state"
	const [ state, setState ] = useState(initialVal);
	const toggle = () => {
		setState(!state); // using a generic state here so useToggle can be reused
	};
	// hooks return a piece of state and the function that is modifying that state (toggle)
	return [ state, toggle ];
}
export default useToggle;

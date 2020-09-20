import React, { useState } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchMode() {
	const [ state, setState ] = useState({
		checked: false,
		demo: true
	});

	const handleChange = () => {
		setState({
			checked: !state.checked,
			demo: !state.demo
		});
	};

	return (
		<FormGroup row>
			<FormControlLabel
				control={
					<Switch
						checked={state.checked}
						onChange={handleChange}
						name="checkedA"
					/>
				}
				label={state.demo ? 'Demo' : 'User'}
			/>
		</FormGroup>
	);
}

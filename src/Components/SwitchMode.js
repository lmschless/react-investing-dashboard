import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchMode() {
	const [ state, setState ] = React.useState({
		checkedA: { checked: true, mode: 'Demo Mode' },
		checkedB: true
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	return (
		<FormGroup row>
			<FormControlLabel
				control={
					<Switch
						checked={state.checkedA}
						onChange={handleChange}
						name="checkedA"
					/>
				}
				label={state.checkedA.mode}
			/>
		</FormGroup>
	);
}

import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingBottom: '1em'
	}
}));

export default function AlertText(props) {
	const classes = useStyles();

	// const [ test, setTest ] = useState(null);
	// useEffect(() => {
	// 	setTest(
	// 		<div className={classes.root}>
	// 			<Alert severity="error">{props.alertText}</Alert>
	// 		</div>
	// 	);
	// 	setTimeout(() => {
	// 		setTest(null);
	// 	}, 4000);
	// }, []);
	// return test;

	return (
		<div className={classes.root}>
			<Alert severity="error">{props.alertText}</Alert>
		</div>
	);
}

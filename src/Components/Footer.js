import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles({
	root: {
		width: 500
	}
});

export default function Footer() {
	const classes = useStyles();
	const [ value, setValue ] = React.useState(0);

	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			showLabels
			className={classes.root}
		>
			<BottomNavigationAction label="New Stock" icon={<AddIcon />} />
			<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
			<BottomNavigationAction label="Reset To Default" icon={<RestoreIcon />} />
		</BottomNavigation>
	);
}

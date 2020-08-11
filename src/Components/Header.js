import React, { useEffect, useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import moment from 'moment';
import SwitchMode from './SwitchMode';

const useStyles = makeStyles((theme) => ({
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},
	text: {
		padding: theme.spacing(2, 2, 0)
	},
	paper: {
		paddingTop: 50
	},
	list: {
		marginBottom: theme.spacing(2)
	},
	subheader: {
		backgroundColor: theme.palette.background.paper
	},
	appBar: {
		top: 'auto',
		bottom: 'auto'
	},
	grow: {
		flexGrow: 1
	},
	search: {
		position: 'relative',
		borderRadius: '0%',
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto'
		}
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit',
		borderRadius: '0%',
		transition: null
	},
	addStockButton: {
		marginLeft: '1rem',
		marginRight: '1rem'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		// transition: theme.transitions.create('width'),
		width: '100%',
		borderRadius: '0%',
		[theme.breakpoints.up('md')]: {
			width: '20ch'
		},
		iconButton: {
			borderRadius: '0%',
			transition: null
		}
	}
}));
export default function Header(props) {
	const [ userInput, setInput ] = useState('');
	const classes = useStyles();
	const currentTime = moment().format('MMMM  Do, YYYY, h:mm a');
	const currentDay = moment().format('dddd');
	const time = moment.utc().format('hhmm');

	const [ marketStatus, setStatus ] = useState(false);

	useEffect(
		() => {
			console.log(time);
			if (
				time > 1330 &&
				time < 2000 &&
				currentDay !== 'Saturday' &&
				currentDay !== 'Sunday'
			) {
				setStatus(true);
				console.log('Market Open!');
			} else {
				setStatus(false);
				console.log('Market Closed!');
			}
		},
		[ currentDay, time ]
	);

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position="fixed" color="primary" className={classes.appBar}>
				<Toolbar>
					<Typography className={classes.title} variant="h4" noWrap>
						Investing Dashboard
					</Typography>
					<Typography style={{ marginLeft: '2em' }} variant="subtitle2">
						{' '}
						{currentTime}
					</Typography>
					<div className={classes.grow} />
					NYSE : &nbsp;{' '}
					{marketStatus ? (
						<span style={{ backgroundColor: 'green' }}>Market Open</span>
					) : (
						<span style={{ backgroundColor: '#f40056' }}>Market Closed</span>
					)}
					{/* Commenting this out to fix messy styling when hovering the search box. */}
					{/* <IconButton className={classes.iconButton} color="inherit"> */}
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							onChange={(e) => setInput(e.target.value)}
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>{' '}
					{/* </IconButton> */}
					<Button
						onClick={() => {
							if (userInput === '') {
								return console.log('Please enter a stock before searching.');
							}
							console.log(userInput);
							props.searchStock(userInput);
						}}
						variant="contained"
						color="secondary"
						className={classes.addStockButton}
						endIcon={<Icon>add</Icon>}
					>
						Add Stock
					</Button>
					<SwitchMode />
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

Header.propTypes = {
	searchStock: PropTypes.func
};

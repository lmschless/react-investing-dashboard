import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';

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
		paddingBottom: 50
	},
	list: {
		marginBottom: theme.spacing(2)
	},
	subheader: {
		backgroundColor: theme.palette.background.paper
	},
	appBar: {
		top: 'auto',
		bottom: 0
	},
	grow: {
		flexGrow: 1
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
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
		color: 'inherit'
	},

	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch'
		}
	},
	fabButton: {
		position: 'absolute',
		zIndex: 1,
		top: -30,
		left: 0,
		right: 0,
		margin: '0 auto'
	}
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position="fixed" color="primary" className={classes.appBar}>
				<Toolbar>
					<Typography className={classes.title} variant="h6" noWrap>
						Investing Portfolio
					</Typography>
					<Fab color="secondary" aria-label="add" className={classes.fabButton}>
						<AddIcon />
					</Fab>
					<div className={classes.grow} />
					<IconButton color="inherit">
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput
								}}
								inputProps={{ 'aria-label': 'search' }}
							/>
						</div>{' '}
					</IconButton>
					<IconButton edge="end" color="inherit">
						<MoreIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

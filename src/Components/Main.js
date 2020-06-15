import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Stock from './Stock';
import Footer from './Footer';
import NewsCard from './NewsCard';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	hide: {
		display: 'none'
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1)
		// necessary for content to be below app bar
		// ...theme.mixins.toolbar
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
}));

export default function Main() {
	const classes = useStyles();
	const gridContainer = {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(18em, 5fr))',
		gridTemplateRows: 'repeat(auto-fill, .5fr)',
		gridColumnGap: '.75em',
		gridRowGap: '1em',
		minHeight: '80vh'
		// padding: '2em'
		// margin: '5em'
	};

	return (
		<React.Fragment>
			<div className={classes.root}>
				{/* <AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" noWrap>
						Luke's Investing Portfolio
					</Typography>
				</Toolbar>
			</AppBar> */}
				<main className={classes.content}>
					{/* <div className={classes.toolbar} /> */}
					{/* <Typography paragraph> */}

					{/* <StockList /> */}
					<div style={gridContainer}>
						<Stock />
						<Stock />
						<Stock />
						<Stock />
						<Stock />
						<Stock />
						<Stock />
						<Stock />
					</div>
					{/* </Typography> */}
				</main>
				<NewsCard />
			</div>
			<Footer />
		</React.Fragment>
	);
}

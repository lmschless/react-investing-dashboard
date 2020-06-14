import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import StockList from './StockList';
import NewsFeed from './NewsFeed';
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
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
}));

export default function Nav() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" noWrap>
						Luke's Investing Portfolio
					</Typography>
				</Toolbar>
			</AppBar>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				{/* <Typography paragraph> */}
				<StockList />
				{/* </Typography> */}
			</main>
			<NewsCard />
			{/* <NewsFeed /> */}
		</div>
	);
}

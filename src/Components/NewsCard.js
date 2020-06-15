import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';
import styled from 'styled-components';
import axios from 'axios';
import NewsCard from './NewsCard';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
	root: {
		// marginTop: '10vh',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden'
		// backgroundColor: theme.palette.background.paper
	},
	gridList: {
		display: 'grid',
		gridTemplateColumns: '1fr',
		width: '18vw',
		height: '80vh'
	},
	text: {
		fontSize: '1'
	}
}));

// const textStyles = {
// 	fontSize: '1px'
// };

export default function TitlebarGridList() {
	const [ data, setData ] = useState({ test: [] });

	useEffect(() => {
		const getNews = async () => {
			const result = await axios(
				'http://newsapi.org/v2/everything?q="stock market"&sortBy=publishedAt&apiKey=90ddee78a57f435fa9efe02754a6176a'
			);
			console.log(result.data.articles);
			setData(result.data.articles);
		};
		getNews();
	}, []);
	console.log(data);

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<GridList cellHeight={220} className={classes.gridList}>
				{/* <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
					<ListSubheader component="div">Investing News</ListSubheader>
				</GridListTile> */}
				{Array.from(data).map((tile) => (
					<GridListTile key={tile.img}>
						<img src={tile.urlToImage} alt={tile.title} />
						<GridListTileBar
							className={classes.text}
							title={tile.title}
							sutitle={<span>by: {tile.author}</span>}
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}

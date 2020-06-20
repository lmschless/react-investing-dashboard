import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

// import tileData from './tileData';
import styled from 'styled-components';
import axios from 'axios';
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
		width: '20vw',
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
				'http://newsapi.org/v2/everything?q="stock market"&language=en&sortBy=publishedAt&pageSize=40&apiKey=90ddee78a57f435fa9efe02754a6176a'
			);
			console.log(result.data.articles);

			// filters out responses that have a null title, author, image, etc.
			const filtered = result.data.articles
				.filter(({ title, author, publishedAt, urlToImage, url }) =>
					[ title, author, publishedAt, urlToImage, url ].every(
						(prop) => prop !== null
					)
				)
				.map(
					({
						title,
						author,
						publishedAt: date,
						urlToImage: image,
						url: link
					}) => ({
						title,
						author,
						date,
						image,
						link
					})
				);
			// setData(result.data.articles);
			setData(filtered);
		};
		getNews();
	}, []);
	// console.log('data:');
	// console.log({ data });

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<GridList cellHeight={280} className={classes.gridList}>
				{/* <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
					<ListSubheader component="div">Investing News</ListSubheader>
				</GridListTile> */}
				{Array.from(data).map((tile) => (
					<GridListTile key={tile.link}>
						<img src={tile.image} alt={tile.title} />
						<GridListTileBar
							className={classes.text}
							title={tile.title}
							subtitle={<span>{tile.date}</span>}
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}

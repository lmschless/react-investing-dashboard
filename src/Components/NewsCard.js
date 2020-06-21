import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: '5vh',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		justifyContent: 'center',
		overflow: 'hidden'
	},
	gridList: {
		display: 'grid',
		gridTemplateColumns: '1fr',
		width: '22vw',
		height: '80vh',
		overflowX: 'hidden'
	},
	text: {
		display: 'flex',
		justifyContent: 'center',
		whiteSpace: 'wrap'
	},
	img: {
		left: 0,
		right: 0,
		transform: 'translateX(0%)'
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
					({ title, author, publishedAt: date, urlToImage: image, url }) => ({
						title,
						author,
						date,
						image,
						url
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
				<Grid
					container
					direction="row"
					// justify="center"
					alignItems="center"
				>
					{Array.from(data).map((tile) => (
						<a href={tile.url}>
							<GridListTile key={tile.url}>
								<img
									className={classes.img}
									height="450"
									width="350"
									link={tile.link}
									src={tile.image}
									alt={tile.title}
								/>
								<GridListTileBar
									// style={{ whiteSpace: 'wrap' }}
									titlePosition="top"
									key={tile.url}
									className={classes.text}
									// title={tile.title}
									subtitle={
										<span className={classes.text}>
											{tile.title} <br />
											{tile.date}
										</span>
									}
								/>
							</GridListTile>
						</a>
					))}
				</Grid>
			</GridList>

			{/* <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
					<ListSubheader component="div">Investing News</ListSubheader>
				</GridListTile> */}
			{/* {Array.from(data).map((tile) => (
					<GridListTile key={tile.link}>
						<img src={tile.image} alt={tile.title} />
						<GridListTileBar
							className={classes.text}
							title={tile.title}
							subtitle={<span>{tile.date}</span>}
						/>
					</GridListTile>
				))}
			</GridList> */}
		</div>
	);
}

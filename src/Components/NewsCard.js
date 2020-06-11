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

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '10vh',
		display: 'flex',
		// flexDirection: 'column',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper
	},
	gridList: {
		display: 'grid',
		gridTemplateColumns: '1fr',
		width: 250
		// height: '80vh'
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)'
	}
}));

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
			<GridList cellHeight={250} className={classes.gridList}>
				<GridListTile
					key="Subheader"
					cols={1}
					style={{ height: 'auto', marginTop: '100px' }}
				>
					<ListSubheader component="div">December</ListSubheader>
				</GridListTile>
				{Array.from(data).map((tile) => (
					<GridListTile key={tile.img}>
						<img src={tile.urlToImage} alt={tile.title} />
						<GridListTileBar
							title={tile.title}
							subtitle={<span>by: {tile.author}</span>}
							actionIcon={
								<IconButton
									aria-label={`info about ${tile.title}`}
									className={classes.icon}
								>
									<InfoIcon />
								</IconButton>
							}
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}

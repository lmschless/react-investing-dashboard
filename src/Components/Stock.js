import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles({
	root: {
		maxWidth: 300
	}
});

export default function Stocks() {
	const classes = useStyles();
	const [ data, setData ] = useState({ metaData: [] });

	useEffect(() => {
		const getStockData = async () => {
			const result = {
				'Meta Data': {
					'1. Information':
						'Weekly Prices (open, high, low, close) and Volumes',
					'2. Symbol': 'IBM',
					'3. Last Refreshed': '2020-05-29',
					'4. Time Zone': 'US/Eastern'
				}
			};
			// LIVE API:
			// const result = await axios(
			// 	'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=12UGV4HUPE1MOT6Y'
			// );
			setData(result['Meta Data']);
			//  LIVE API:
			// setData(result.data['Meta Data']);
		};
		getStockData();
	}, []);
	console.log(data);

	// const symbol = data.["Meta Data"];
	// console.log(symbol);
	const image = require('./../assets/stock-placeholder.jpg');

	const cardStyles = {
		justifyContent: 'center'
	};

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="Stock placeholder image"
					height="120"
					image={image}
					title="Stock Ticker Card"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						IBM{' '}
					</Typography>
					{/* <Typography variant="body2" color="textSecondary" component="p"> */}
					<div>
						{Object.values(data).map((item) => {
							return <li>{item}</li>;
						})}

						{/* {data.metaData.map((item) => <li>{item}</li>)} */}
					</div>
					{/* </Typography> */}
				</CardContent>
			</CardActionArea>
			<CardActions style={cardStyles}>
				<IconButton aria-label="add">
					<AddCircleIcon />
				</IconButton>
				<IconButton aria-label="edit">
					<EditIcon />
				</IconButton>
				<IconButton aria-label="delete">
					<DeleteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}

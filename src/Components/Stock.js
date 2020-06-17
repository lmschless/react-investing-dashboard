import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
	root: {
		maxWidth: 300
	}
});

export default function Stocks(props) {
	const classes = useStyles();
	// const [ data, setData ] = useState({ metaData: [] });

	// useEffect(() => {
	// 	const getStockData = async () => {
	// 		const result = {
	// 			'Meta Data': {
	// 				'1. Information':
	// 					'Weekly Prices (open, high, low, close) and Volumes',
	// 				'2. Symbol': 'IBM',
	// 				'3. Last Refreshed': '2020-05-29',
	// 				'4. Time Zone': 'US/Eastern'
	// 			}
	// 		};
	// 		// LIVE API:
	// 		// const result = await axios(
	// 		// 	'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=12UGV4HUPE1MOT6Y'
	// 		// );
	// 		setData(result['Meta Data']);
	// 		//  LIVE API:
	// 		// setData(result.data['Meta Data']);
	// 	};
	// 	getStockData();
	// }, []);
	// console.log(data);

	// // const symbol = data.["Meta Data"];
	// // console.log(symbol);
	// const image = require('./../assets/stock-placeholder.jpg');

	const cardStyles = {
		justifyContent: 'center'
	};

	return (
		<Card className={classes.root}>
			{/* <CardActionArea> */}
			<CardMedia
				component="img"
				alt="Stock placeholder image"
				height="120"
				image={props.img}
				title="Stock Ticker Card"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{props.name}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					<div>
						Open: {props.open}
						<li>{props.close}</li>
						<li>{props.change}</li>
					</div>
				</Typography>
			</CardContent>
			{/* </CardActionArea> */}
			<CardActions style={cardStyles}>
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

Stocks.propTypes = {
	stock: PropTypes.string
	// img: PropTypes.string
};

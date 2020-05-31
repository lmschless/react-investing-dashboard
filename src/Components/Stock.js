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
			const result = await axios(
				'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=12UGV4HUPE1MOT6Y'
			);
			setData(result.data['Meta Data']);
		};
		getStockData();
	}, []);
	console.log(data);

	// const symbol = data.["Meta Data"];
	// console.log(symbol);
	const image = require('./../assets/stock-placeholder.jpg');
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
					<Typography variant="body2" color="textSecondary" component="p">
						<ul>
							{Object.values(data).map((item) => {
								return <li>{item}</li>;
							})}

							{/* {data.metaData.map((item) => <li>{item}</li>)} */}
						</ul>
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}

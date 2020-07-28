import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { VictoryTheme, VictoryLine, VictoryChart } from 'victory';
import { formatTimeFromNow } from './utils/time';

const useStyles = makeStyles({
	root: {
		maxWidth: 330,
		maxHeight: '385px',
		minWidth: 295,
		minHeight: '385px',
		border: 'solid .5px white'
	}
});

export default function Stocks(props) {
	const price = parseFloat(props.price).toFixed(2);
	const open = parseFloat(props.open).toFixed(2);
	const close = parseFloat(props.close).toFixed(2);
	let change = parseFloat(props.change).toFixed(2);

	if (change > 0) {
		change = <span style={{ color: 'green' }}>({change}%)</span>;
	} else {
		change = <span style={{ color: 'red' }}>({change}%)</span>;
	}

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
	const image = require('./../assets/stock-placeholder.jpg');
	return (
		<Card className={classes.root}>
			{/* <VictoryChart> */}
			<CardMedia
				className={classes.media}
				component="img"
				alt="Stock placeholder image"
				height="120"
				image={image}
				title="Default Stock Image"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{props.name}
				</Typography>
				{/* <div style={{ height: '100px' }}>
					<VictoryLine
						style={{
							data: {
								stroke: '#404db5',
								strokeWidth: ({ data }) => data.length
							},
							labels: {
								fontSize: 15,
								fill: ({ datum }) => (datum.x === 3 ? '#c43a31' : '#fffeff')
							}
						}}
						data={[
							{ x: 1, y: 2 },
							{ x: 2, y: 3 },
							{ x: 3, y: 5 },
							{ x: 4, y: 4 },
							{ x: 5, y: 6 }
						]}
						labels={({ datum }) => datum.x}
					/>
				</div> */}
				{/* <div> */}
				<Typography gutterBottom variant="h5" component="h2">
					{price}
					<br />
					{change}
				</Typography>
				Open: {open}
				<br />
				Previous Close: {close}
				<hr />
				Last updated {formatTimeFromNow()}
				<CardActions style={cardStyles}>
					<IconButton
						aria-label="delete"
						onClick={() => {
							props.delete(props.id);
						}}
					>
						<DeleteIcon />
					</IconButton>
				</CardActions>
			</CardContent>
		</Card>
	);
}

Stocks.propTypes = {
	stock: PropTypes.string,
	delete: PropTypes.func,
	name: PropTypes.string,
	price: PropTypes.string,
	open: PropTypes.string,
	change: PropTypes.string
};

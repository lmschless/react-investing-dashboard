import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { formatTimeFromNow } from './utils/time';
import styled from 'styled-components';

const useStyles = makeStyles({
	root: {
		maxWidth: 330,
		maxHeight: '385px',
		minWidth: 285,
		minHeight: '380px'
	}
});

const StyledSpan = styled.span`
	color: '${(props) => (props.change > 0 ? 'green' : '#f40056')}';
`;

export default function Stocks(props) {
	const price = parseFloat(props.price).toFixed(2);
	const open = parseFloat(props.open).toFixed(2);
	const close = parseFloat(props.close).toFixed(2);
	let fixedChange = parseFloat(props.change).toFixed(2);
	const [ change, setChange ] = useState(fixedChange);

	// if (change > 0) {
	// 	change = <span style={{ color: 'green' }}>({change}%)</span>;
	// } else {
	// 	change = <span style={{ color: '#f40056' }}>({change}%)</span>;
	// }

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
				<Typography gutterBottom variant="h5" component="h2">
					{price}
					<br />
					<StyledSpan change={change}>{change}%</StyledSpan>
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

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

// have to use an attribute prop on the StyledSpan component. Added true/false values there so this statement can evaluate those instead of the actual condition.
const StyledSpan = styled.span`
	color: ${(props) => (props.colorChange ? 'green' : '#f40056')};
`;
export default function TickerCard(props) {
	const [ state, setState ] = useState({
		price: parseFloat(props.price).toFixed(2),
		open: parseFloat(props.open).toFixed(2),
		close: parseFloat(props.close).toFixed(2),
		fixedChange: parseFloat(props.change).toFixed(2),
		cardImage: require('./../assets/stock-placeholder.jpg')
	});

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

	const cardStyles = {
		justifyContent: 'center'
	};
	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				component="img"
				alt="Stock placeholder image"
				height="120"
				image={state.cardImage}
				title="Default Stock Image"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{props.name}
				</Typography>
				<Typography gutterBottom variant="h5" component="h2">
					{state.price}
					<br />
					<StyledSpan colorChange={state.fixedChange > 0 ? true : false}>
						{state.fixedChange}%
					</StyledSpan>
				</Typography>
				Open: {state.open}
				<br />
				Previous Close: {state.close}
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

TickerCard.propTypes = {
	stock: PropTypes.string,
	delete: PropTypes.func,
	name: PropTypes.string,
	price: PropTypes.string,
	open: PropTypes.string,
	change: PropTypes.string
};

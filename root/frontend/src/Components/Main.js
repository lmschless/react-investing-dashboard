import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TickerCard from './TickerCard';
import Header from './Header';
import NewsCard from './NewsCard';
import axios from 'axios';
import { v4 } from 'uuid';
import AlertText from './Alerts';
import stockData from '../Data/stockData';
import TickerList from './TickerList';
import { fetchQuote } from '../Api/fetchQuote';
// const stockData = require('../Data/stockData');

const styles = (theme) => ({
	root: {
		display: 'flex'
	},
	hide: {
		display: 'none'
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1)
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		paddingTop: 85
	}
});

export class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			alert: null,
			stocks: [],
			image: require('./../assets/stock-placeholder.jpg'),
			// use function to map over json and build array?

			fallbackStocks: [
				{
					symbol: 'IBM',
					open: '126.1700',
					high: '126.8200',
					low: '122.2500',
					price: '122.4700',
					volume: '7531117',
					date: '2020-06-19',
					previousClose: '124.1600',
					change: '-1.6900',
					changePercent: '-1.3611%'
				},
				{
					symbol: 'AAPL',
					open: '354.6350',
					high: '356.5600',
					low: '345.1500',
					price: '349.7200',
					volume: '64107713',
					date: '2020-06-19',
					previousClose: '351.7300',
					change: '-2.0100',
					changePercent: '-0.5715%'
				},
				{
					symbol: 'MSFT',
					open: '198.5900',
					high: '199.2900',
					low: '194.3700',
					price: '195.1500',
					volume: '43674250',
					date: '2020-06-19',
					previousClose: '196.3200',
					change: '-1.1700',
					changePercent: '-0.5960%'
				},
				{
					symbol: 'SNAP',
					open: '22.4100',
					high: '22.6950',
					low: '21.9500',
					price: '22.6600',
					volume: '33289970',
					date: '2020-06-19',
					previousClose: '21.9900',
					change: '0.6700',
					changePercent: '3.0468%'
				},
				{
					symbol: 'FB',
					open: '237.7900',
					high: '240.8300',
					low: '235.5500',
					price: '238.7900',
					volume: '30081291',
					date: '2020-06-19',
					previousClose: '235.9400',
					change: '2.8500',
					changePercent: '1.2079%'
				},
				{
					symbol: 'TSLA',
					open: '1012.7800',
					high: '1015.9700',
					low: '991.3400',
					price: '1000.9000',
					volume: '8679749',
					date: '2020-06-19',
					previousClose: '1003.9600',
					change: '-3.0600',
					changePercent: '-0.3048%'
				}
			]
		};
		this.state.fallbackStocks.forEach((stock) => {
			stock.id = v4();
		});
	}

	// componentDidMount = async () => {
	// 	let newData = { ...stockData };
	// 	await this.setState({
	// 		fallbackStocks: newData
	// 	});
	// 	console.log(this.state.fallbackStocks);
	// 	// this.state.fallbackStocks.forEach((stock) => {
	// 	// 	stock.id = v4();
	// 	// });
	// };

	// componentDidMount = async () => {
	// 	await axios
	// 		.all([
	// 			axios.get(
	// 				`https://www.alphavantage.co/query?apikey=12UGV4HUPE1MOT6Y&function=GLOBAL_QUOTE&symbol=IBM`
	// 			),
	// 			axios.get(
	// 				`https://www.alphavantage.co/query?apikey=12UGV4HUPE1MOT6Y&function=GLOBAL_QUOTE&symbol=AAPL`
	// 			),
	// 			axios.get(
	// 				`https://www.alphavantage.co/query?apikey=12UGV4HUPE1MOT6Y&function=GLOBAL_QUOTE&symbol=MSFT`
	// 			)
	// 		])
	// 		.then(
	// 			axios.spread((firstResponse, secondResponse, thirdResponse) => {
	// 				console.log(
	// 					firstResponse.data,
	// 					secondResponse.data,
	// 					thirdResponse.data
	// 				);

	// 				let newStockList = this.state.stocks;
	// 				newStockList.unshift(
	// 					firstResponse.data['Global Quote'],
	// 					secondResponse.data['Global Quote'],
	// 					thirdResponse.data['Global Quote']
	// 				);
	// 				// correctly updates state to hold the 3 API responses
	// 				this.setState({ stocks: newStockList });
	// 			})
	// 		)
	// 		.catch((error) => console.log(error));
	// 	console.log(this.state.stocks);
	// };

	handleCheck = (val) => {
		const matchingSymbol = val.toUpperCase();
		return this.state.fallbackStocks.some(
			(item) => matchingSymbol === item['symbol']
		);
	};

	handleAddStock = (result) => {
		let newStockList = this.state.fallbackStocks;
		newStockList.unshift(result);
		this.setState({ fallbackStocks: newStockList, alert: null });
		console.log(this.state.fallbackStocks);
	};

	handleError = () => {
		this.setState({
			alert: (
				<span>
					<AlertText alertText="Error: That ticker already exists, please try another." />
				</span>
			)
		});
		setTimeout(() => {
			this.setState({
				alert: null
			});
		}, 5000);
	};

	handleSearchStock = async (input) => {
		const tickerExists = this.handleCheck(input);
		if (tickerExists) {
			this.handleError();
		} else {
			let result = await fetchQuote(input);
			let newStockList = this.state.fallbackStocks;
			newStockList.unshift(result);
			this.setState({ fallbackStocks: newStockList, alert: null });
			console.log(this.state.fallbackStocks);
			return console.log(result);
			// return this.handleAddStock(result);
		}
		// await newStock();
	};
	// await axios
	// 	.get(
	// 		`https://www.alphavantage.co/query?apikey=12UGV4HUPE1MOT6Y&function=GLOBAL_QUOTE&symbol=${input}`
	// 	)
	// 	.then((response) => {
	// 		let result = response.data['Global Quote'];
	// 		console.log(result);
	// 		this.handleAddStock(result);
	// 		// checks for duplicate symbol. triggers alert if true
	// 		// this.handleCheck(result) === false
	// 		// 	? this.handleAddStock(result)
	// 		// 	: this.handleError();
	// 	})
	// 	.catch((error) => console.log(error));

	render() {
		const { classes } = this.props;
		// const showAlert = this.state.alert ? null : classes.hide;

		return (
			<React.Fragment>
				<div className={classes.root}>
					<Header
						addStock={this.handleAddStock}
						searchStock={this.handleSearchStock}
					/>
					<main className={classes.content}>
						{this.state.alert}

						{/* using fallback stocks object instead of api for now */}
						{/* {this.state.fallbackStocks.map((stock) => (
								<TickerCard
									name={stock['symbol']}
									key={stock['symbol']}
									price={stock['price']}
									open={stock['open']}
									close={stock['previousClose']}
									change={stock['changePercent']}
									id={stock.id}
									delete={this.handleDeleteStock}
								/>
							))} */}
						<TickerList stockList={this.state.fallbackStocks} />
					</main>
					<NewsCard />
				</div>
			</React.Fragment>
		);
	}
}
export default withStyles(styles, { withTheme: true })(Main);

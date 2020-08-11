import React, { Component } from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import TickerCard from './TickerCard';
import Header from './Header';
import NewsCard from './NewsCard';
import axios from 'axios';
import { v4 } from 'uuid';
import AlertText from './Alerts';

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
			fallbackStocks: [
				{
					'01. symbol': 'IBM',
					'02. open': '126.1700',
					'03. high': '126.8200',
					'04. low': '122.2500',
					'05. price': '122.4700',
					'06. volume': '7531117',
					'07. latest trading day': '2020-06-19',
					'08. previous close': '124.1600',
					'09. change': '-1.6900',
					'10. change percent': '-1.3611%'
				},
				{
					'01. symbol': 'AAPL',
					'02. open': '354.6350',
					'03. high': '356.5600',
					'04. low': '345.1500',
					'05. price': '349.7200',
					'06. volume': '64107713',
					'07. latest trading day': '2020-06-19',
					'08. previous close': '351.7300',
					'09. change': '-2.0100',
					'10. change percent': '-0.5715%'
				},
				{
					'01. symbol': 'MSFT',
					'02. open': '198.5900',
					'03. high': '199.2900',
					'04. low': '194.3700',
					'05. price': '195.1500',
					'06. volume': '43674250',
					'07. latest trading day': '2020-06-19',
					'08. previous close': '196.3200',
					'09. change': '-1.1700',
					'10. change percent': '-0.5960%'
				},
				{
					'01. symbol': 'SNAP',
					'02. open': '22.4100',
					'03. high': '22.6950',
					'04. low': '21.9500',
					'05. price': '22.6600',
					'06. volume': '33289970',
					'07. latest trading day': '2020-06-19',
					'08. previous close': '21.9900',
					'09. change': '0.6700',
					'10. change percent': '3.0468%'
				},
				{
					'01. symbol': 'FB',
					'02. open': '237.7900',
					'03. high': '240.8300',
					'04. low': '235.5500',
					'05. price': '238.7900',
					'06. volume': '30081291',
					'07. latest trading day': '2020-06-19',
					'08. previous close': '235.9400',
					'09. change': '2.8500',
					'10. change percent': '1.2079%'
				},
				{
					'01. symbol': 'TSLA',
					'02. open': '1012.7800',
					'03. high': '1015.9700',
					'04. low': '991.3400',
					'05. price': '1000.9000',
					'06. volume': '8679749',
					'07. latest trading day': '2020-06-19',
					'08. previous close': '1003.9600',
					'09. change': '-3.0600',
					'10. change percent': '-0.3048%'
				}
			]
		};
		this.state.fallbackStocks.forEach((stock) => {
			stock.id = v4();
		});
	}
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
		return this.state.fallbackStocks.some(
			(item) => val['01. symbol'] === item['01. symbol']
		);
	};

	handleAddStock = (result) => {
		let newStockList = this.state.fallbackStocks;
		newStockList.unshift(result);
		this.setState({ fallbackStocks: newStockList, alert: null });
	};

	handleDeleteStock = (id) => {
		let filteredStocks = this.state.fallbackStocks.filter(
			(stock) => stock.id !== id
		);
		this.setState({ fallbackStocks: filteredStocks });
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
		await axios
			.get(
				`https://www.alphavantage.co/query?apikey=12UGV4HUPE1MOT6Y&function=GLOBAL_QUOTE&symbol=${input}`
			)
			.then((response) => {
				let result = response.data['Global Quote'];
				console.log(result);
				// checks for duplicate symbol. triggers alert if true
				this.handleCheck(result) === false
					? this.handleAddStock(result)
					: this.handleError();
			})
			.catch((error) => console.log(error));
	};

	// handleAlert = () => {
	// 	this.setState({ show: 'classes.hide' });
	// 	setTimeout(() => {
	// 		this.setState({ show: '' });
	// 	}, 3000);
	// };

	render() {
		const { classes } = this.props;
		// const showAlert = this.state.alert ? null : classes.hide;
		const gridContainer = {
			display: 'grid',
			gridTemplateColumns: 'repeat(3, 1fr)',
			gridTemplateRows: 'repeat(2, 1fr)',
			gridColumnGap: '.25em',
			gridRowGap: '2.5em',
			minHeight: '80vh'
		};

		return (
			<React.Fragment>
				<div className={classes.root}>
					<Header
						addStock={this.handleAddStock}
						searchStock={this.handleSearchStock}
					/>
					<main className={classes.content}>
						{this.state.alert}

						<div style={gridContainer}>
							{/* using fallback stocks object instead of api for now */}
							{this.state.fallbackStocks.map((stock) => (
								<TickerCard
									name={stock['01. symbol']}
									key={stock['01. symbol']}
									price={stock['05. price']}
									open={stock['02. open']}
									close={stock['08. previous close']}
									change={stock['10. change percent']}
									id={stock.id}
									delete={this.handleDeleteStock}
								/>
							))}
						</div>
					</main>
					<NewsCard />
				</div>
			</React.Fragment>
		);
	}
}
export default withStyles(styles, { withTheme: true })(Main);

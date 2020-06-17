import React, { Component } from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Stock from './Stock';
import Footer from './Footer';
import NewsCard from './NewsCard';
import axios from 'axios';

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
		// necessary for content to be below app bar
		// ...theme.mixins.toolbar
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
});

export class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stocks: [],
			image: require('./../assets/stock-placeholder.jpg')
		};
	}

	componentDidMount = async () => {
		const results = await axios(
			'https://www.alphavantage.co/query?apikey=12UGV4HUPE1MOT6Y&function=GLOBAL_QUOTE&symbol=IBM'
		);
		// console.log(result);
		const data = results.data['Global Quote'];

		let result = {
			name: data['2. Symbol']
		};
		this.setState({ stocks: data });
		console.log(this.state.stocks);
	};
	// const [ data, setData ] = useState({ metaData: [] });
	// const [ symbols, setSymbol ] = useState({
	// 	default: [ 'IBM', 'MSFT', 'AAPL' ]
	// });

	// useEffect(() => {
	// 	const getStockData = async () => {
	// hard coded
	// const result = {
	// 	'Meta Data': {
	// 		'1. Information':
	// 			'Weekly Prices (open, high, low, close) and Volumes',
	// 		'2. Symbol': 'IBM',
	// 		'3. Last Refreshed': '2020-05-29',
	// 		'4. Time Zone': 'US/Eastern'
	// 	}
	// };
	//////////////////////
	// LIVE API:
	// const result = await axios(
	// 	'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=12UGV4HUPE1MOT6Y'
	// );
	///// hard coded:
	// setData(result['Meta Data']);
	//  LIVE API:
	// 		setData(result.data['Meta Data']);
	// 	};
	// 	getStockData();
	// }, []);
	// console.log('Main data:');
	// console.log({ data });
	// console.log({ symbols });
	// const symbol = data.["Meta Data"];
	// console.log(symbol);

	render() {
		const { classes } = this.props;
		const gridContainer = {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(18em, 5fr))',
			gridTemplateRows: 'repeat(auto-fill, .5fr)',
			gridColumnGap: '.75em',
			gridRowGap: '1em',
			minHeight: '80vh'
			// padding: '2em'
			// margin: '5em'
		};
		const stock = this.state.stocks;
		console.log(stock);
		return (
			<React.Fragment>
				<div className={classes.root}>
					<main className={classes.content}>
						{/* <div className={classes.toolbar} /> */}
						{/* <Typography paragraph> */}

						{/* <StockList /> */}
						<div style={gridContainer}>
							<Stock
								name={stock['01. symbol']}
								img={this.state.image}
								open={stock['02. open']}
							/>
							<Stock
								name={stock['01. symbol']}
								img={this.state.image}
								open={stock['02. open']}
							/>
							<Stock
								name={stock['01. symbol']}
								img={this.state.image}
								open={stock['02. open']}
							/>
							<Stock
								name={stock['01. symbol']}
								img={this.state.image}
								open={stock['02. open']}
							/>

							{/* {Object.values(data).map((stock) => {
							return <Stock name={stock.symbol} image={stock.urlToImage} />;
						})} */}

							{/* {Array.from(data).map((stock) => ( */}
							{/* // 	<Stock key={stock.symbol} name={stock.symbol} img={image} />
						// ))} */}
						</div>
						{/* </Typography> */}
					</main>
					<NewsCard />
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
export default withStyles(styles, { withTheme: true })(Main);

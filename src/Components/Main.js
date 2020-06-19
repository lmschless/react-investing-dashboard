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

	// componentDidMount = async () => {
	// 	const results = await axios(
	// 		'https://www.alphavantage.co/query?apikey=12UGV4HUPE1MOT6Y&function=GLOBAL_QUOTE&symbol=IBM'
	// 	);
	// 	// console.log(result);
	// 	const data = results.data['Global Quote'];

	// 	let result = {
	// 		name: data['2. Symbol']
	// 	};
	// 	this.setState({ stocks: data });
	// 	console.log(this.state.stocks);
	// };

	componentDidMount = async () => {
		const results = await axios
			.all([
				axios.get(
					`https://www.alphavantage.co/query?apikey=12UGV4HUPE1MOT6Y&function=GLOBAL_QUOTE&symbol=IBM`
				),
				axios.get(
					`https://www.alphavantage.co/query?apikey=12UGV4HUPE1MOT6Y&function=GLOBAL_QUOTE&symbol=AAPL`
				),
				axios.get(
					`https://www.alphavantage.co/query?apikey=12UGV4HUPE1MOT6Y&function=GLOBAL_QUOTE&symbol=MSFT`
				)
			])
			.then(
				axios.spread((firstResponse, secondResponse, thirdResponse) => {
					console.log(
						firstResponse.data,
						secondResponse.data,
						thirdResponse.data
					);

					let newStockList = this.state.stocks;
					newStockList.unshift(
						firstResponse.data['Global Quote'],
						secondResponse.data['Global Quote'],
						thirdResponse.data['Global Quote']
					);
					// correctly updates state to hold the 3 API responses
					this.setState({ stocks: newStockList });
				})
			)
			.catch((error) => console.log(error));
		console.log(this.state.stocks);
		// console.log(this.state.stocks[0]);
		// const data = results.data['Global Quote'];

		// let result = {
		// 	name: data['2. Symbol']
		// };
		// this.setState({ stocks: data });
		// console.log(this.state.stocks);
	};

	// const [ data, setData ] = useState({ metaData: [] });
	// const [ symbols, setSymbol ] = useState({
	// 	default: [ 'IBM', 'MSFT', 'AAPL' ]
	// });

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
		// const stockList = this.state.stocks;
		// console.log(stock);
		return (
			<React.Fragment>
				<div className={classes.root}>
					<main className={classes.content}>
						{/* <Typography paragraph> */}

						<div style={gridContainer}>
							{this.state.stocks.map((stock) => (
								<Stock
									name={stock['01. symbol']}
									// img={this.state.image}
									key={stock['01. symbol']}
									price={stock['05. price']}
									open={stock['02. open']}
									change={stock['10. change percent']}
								/>
							))}

							{/* <Stock data={this.state.stocks} /> */}
							{/* <Stock
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
							/> */}
						</div>
						{/* </Typography> */}
					</main>
					{/* <NewsCard /> */}
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}
export default withStyles(styles, { withTheme: true })(Main);

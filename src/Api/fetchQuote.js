import axios from 'axios';

const URL =
	'https://www.alphavantage.co/query?apikey=12UGV4HUPE1MOT6Y&function=GLOBAL_QUOTE';
const API_KEY = '12UGV4HUPE1MOT6Y';

export const fetchQuote = async (query) => {
	await axios
		.get(URL, {
			params: {
				symbol: query,
				apikey: API_KEY
			}
		})
		.then((res) => {
			let result = res.data['Global Quote'];

			const {
				['01. symbol']: symbol,
				['02. open']: open,
				['05. price']: price,
				['08. previous close']: close,
				['10. change percent']: changePercent
			} = result;

			let fixedQuote = {
				symbol: symbol,
				open: parseFloat(open).toFixed(2),
				price: parseFloat(price).toFixed(2),
				close: parseFloat(close).toFixed(2),
				changePercent: parseFloat(changePercent).toFixed(2)
			};
			return console.log(fixedQuote);
		});
};

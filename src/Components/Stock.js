import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Stocks() {
	const [ data, setData ] = useState({ metaData: [] });

	useEffect(() => {
		const getStockData = async () => {
			const result = await axios(
				'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=12UGV4HUPE1MOT6Y'
				// 'https://hn.algolia.com/api/v1/search?query=redux'
			);
			setData(result.data['Meta Data']);
		};
		getStockData();
	}, []);
	console.log(data);

	// const symbol = data.["Meta Data"];
	// console.log(symbol);

	return (
		<ul>
			{Object.values(data).map((item) => {
				return <li>{item}</li>;
			})}

			{/* {data.metaData.map((item) => <li>{item}</li>)} */}
		</ul>
	);
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Stocks() {
	const [ data, setData ] = useState({ hits: [] });

	useEffect(() => {
		const getStockData = async () => {
			const result = await axios(
				'https://hn.algolia.com/api/v1/search?query=redux'
			);
			setData(result.data);
		};
		getStockData();
	}, []);
	console.log(data);

	return (
		<ul>
			{data.hits.map((item) => (
				<li key={item.objectID}>
					<a href={item.url}>{item.title}</a>
				</li>
			))}
		</ul>
	);
}

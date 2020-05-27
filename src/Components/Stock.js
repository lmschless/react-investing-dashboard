import React, { useEffect, useState } from 'react';

export default function Stocks() {
	const [ error, setError ] = useState(null);
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ metadata, setItems ] = useState([]);

	// Note: the empty deps array [] means
	// this useEffect will run once
	// similar to componentDidMount()
	useEffect(() => {
		let response = fetch(
			'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5mi n&apikey=12UGV4HUPE1MOT6Y'
		);

		.then((res) => res.json()).then(
			(result) => {
				setIsLoaded(true);
				setItems(result.metadata);
				
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
				setIsLoaded(true);
				setError(error);
			}
		);
	}, []);

	if (error) {
		return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<ul>
				{metadata.map((item) => (
					<li key={item.name}>
						{item.name} {item.price}
					</li>
				))}
			</ul>
		);
	}
}

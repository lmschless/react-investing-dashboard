import React, { useEffect, useState } from 'react';
import axios from '../axios';

export default function Stocks() {
	const getStockData = () => {
		axios
			.get(`/users`, {})
			.then((res) => {
				const data = res.data;
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<button
				onClick={() => {
					getStockData();
				}}
			>
				test
			</button>
		</div>
	);
}

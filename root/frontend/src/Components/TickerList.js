import React, { useState } from 'react';
import TickerCard from './TickerCard';

export default function TickerList({ stockList }) {
	const [ tickerState, updateState ] = useState(stockList);

	const handleDeleteStock = (id) => {
		let filteredStocks = tickerState.filter((stock) => stock.id !== id);
		updateState(filteredStocks);
	};
	const gridContainer = {
		display: 'grid',
		gridTemplateColumns: 'repeat(4, 1fr)',
		gridTemplateRows: 'repeat(2, 1fr)',
		gridColumnGap: '.35em',
		gridRowGap: '1.5em',
		minHeight: '80vh'
	};
	return (
		<div style={gridContainer}>
			{tickerState.map((stock) => (
				<TickerCard
					name={stock['symbol']}
					key={stock['symbol']}
					price={stock['price']}
					open={stock['open']}
					close={stock['previousClose']}
					change={stock['changePercent']}
					id={stock.id}
					delete={handleDeleteStock}
				/>
			))}
		</div>
	);
}

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
					name={stock['01. symbol']}
					key={stock['01. symbol']}
					price={stock['05. price']}
					open={stock['02. open']}
					close={stock['08. previous close']}
					change={stock['10. change percent']}
					id={stock.id}
					delete={handleDeleteStock}
				/>
			))}
		</div>
	);
}

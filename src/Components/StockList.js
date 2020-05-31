import React from 'react';
import Stock from './Stock';

export default function StockList() {
	const gridContainer = {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(20em, 6fr))',
		gridTemplateRows: 'repeat(auto-fill, .5fr)',
		gridColumnGap: '.75em',
		gridRowGap: '1em',
		minHeight: '80vh'
		// padding: '2em',
		// margin: '5em'
	};

	return (
		<React.Fragment>
			<div style={gridContainer}>
				<Stock />
				<Stock />
				<Stock />
				<Stock />
				<Stock />
				<Stock />
				<Stock />
				<Stock />
				<Stock />
				<Stock />
			</div>
		</React.Fragment>
	);
}

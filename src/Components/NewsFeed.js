import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function NewsFeed() {
	const [ data, setData ] = useState({ test: [] });

	useEffect(() => {
		const getNews = async () => {
			const result = await axios(
				'http://newsapi.org/v2/everything?q="stock market"&sortBy=publishedAt&apiKey=90ddee78a57f435fa9efe02754a6176a'
			);
			console.log(result.data.articles);
			setData(result.data.articles);
		};
		getNews();
	}, []);
	console.log(data);

	const Wrapper = styled.div`
		min-width: 25vw;
		max-width: 23vw;
		border: 2px solid black;
		float: right;
		padding: .5em;
	`;

	const News = styled.div`margin-top: 100px;`;

	return (
		<React.Fragment>
			<Wrapper>
				<News>
					{Array.from(data).map((item) => <li key={item.id}>{item.title}</li>)}
				</News>
			</Wrapper>
		</React.Fragment>
	);
}

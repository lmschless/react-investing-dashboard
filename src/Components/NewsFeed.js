import React from 'react';
import styled from 'styled-components';

export default function NewsFeed() {
	const Wrapper = styled.div`
		min-width: 18vw;
		max-width: 23vw;
		border: 2px solid black;
		float: right;
	`;

	const News = styled.div`margin-top: 100px;`;

	return (
		<Wrapper>
			<News>
				<ul>
					<li>test</li>
				</ul>
			</News>
		</Wrapper>
	);
}

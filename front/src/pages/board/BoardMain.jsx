import React from 'react';
import styled from 'styled-components';
import BoardDetail from './BoardDetail';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const BoardMain = () => {
	return (
		<Wrapper>
			<BoardDetail />
		</Wrapper>
	);
};

export default BoardMain;

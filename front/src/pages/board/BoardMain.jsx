import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BoardDetail from './BoardDetail';
import HeaderBar from '../components/HeaderBar';
// import sendApi from '../../apis/sendApi';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const BoardMain = () => {
	return (
		<Wrapper>
			<HeaderBar />
			<BoardDetail />
		</Wrapper>
	);
};

export default BoardMain;

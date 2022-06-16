import React from 'react';
import styled from 'styled-components';
import GalleryDetail from './GalleryDetail';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const GalleryMain = () => {
	return (
		<Wrapper>
			<GalleryDetail />
		</Wrapper>
	);
};

export default GalleryMain;

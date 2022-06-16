import styled from 'styled-components';

const RandomGalleryWrap = styled.div`
	display: flex;
	margin-bottom: 16px;
	padding-left: 32px;
	cursor: pointer;
`;
const ThumbnailImg = styled.img`
	width: 132px;
	height: 120px;
	border-radius: 12px;
`;
const Store = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-left: 40px;
	justify-content: flex-start;
	padding-top: 8px;
`;
const Storename = styled.div`
	font-size: 24px;
	font-weight: bold;
`;
const Storeinfo = styled.div`
	text-align: start;
`;

export { RandomGalleryWrap, ThumbnailImg, Storename, Storeinfo, Store };

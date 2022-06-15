import styled from 'styled-components';

const RandomGalleryWrap = styled.div`
	display: flex;
	margin-bottom: 16px;
	padding-left: 32px;
`;
const ThumbnailImg = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 12px;
`;
const Store = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding-left: 40px;
`;
const Storename = styled.div``;
const Storeinfo = styled.div``;

export { RandomGalleryWrap, ThumbnailImg, Storename, Storeinfo, Store };

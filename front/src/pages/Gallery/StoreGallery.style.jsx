import styled from 'styled-components';

const StoreGalleryWrap = styled.div`
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	margin: 5px;
	background-color: white;
	height: 96%;
`;

const ThumbnailImg = styled.img`
	width: -webkit-fill-available;
	height: 250px;
`;

const Storename = styled.div`
	display: flex;
`;

const Storeinfo = styled.div`
	display: flex;
`;

export { StoreGalleryWrap, ThumbnailImg, Storename, Storeinfo };

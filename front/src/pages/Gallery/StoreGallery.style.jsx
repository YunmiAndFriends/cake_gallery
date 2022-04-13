import styled from 'styled-components';

const StoreGalleryWrap = styled.div`
	border: 1px solid black;
	display: flex;
	flex-direction: row;
`;

const ThumbnailImg = styled.img`
	width: 200px;
	height: 200px;
`;

const Storename = styled.div`
	display: flex;
`;

const Storeinfo = styled.div`
	display: flex;
`;

export { StoreGalleryWrap, ThumbnailImg, Storename, Storeinfo };

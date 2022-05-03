import styled from 'styled-components';

const StoreGalleryWrap = styled.div`
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	margin: 5px;
	height: 100%;
	justify-content: space-around;
	align-items: flex-start;
`;

const ThumbnailImg = styled.img`
	width: -webkit-fill-available;
	height: 250px;
	margin: 4px;
`;

const Storename = styled.div`
	-webkit-text-decoration-line: none;
`;

const Storeinfo = styled.div`
	text-decoration-line: none;
`;

export { StoreGalleryWrap, ThumbnailImg, Storename, Storeinfo };

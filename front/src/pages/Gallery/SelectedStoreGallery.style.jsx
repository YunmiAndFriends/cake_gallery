import styled from 'styled-components';

const StoreGalleryWrap = styled.div`
	border: 1px solid gray;
	border-radius: 4px;
	background-color: #e7eae6c6;
	display: flex;
	flex-direction: column;
	margin: 16px 40px;
	align-items: flex-start;
`;

const ThumbnailImg = styled.img`
	width: -webkit-fill-available;
	height: 200px;
	border-radius: 4px 4px 0 0;
`;

const Storename = styled.div`
	padding: 16px 8px 8px 8px;
`;

const Storearea = styled.div`
	padding: 0 0 8px 8px;
	color: gray;
`;

export { StoreGalleryWrap, ThumbnailImg, Storename, Storearea };

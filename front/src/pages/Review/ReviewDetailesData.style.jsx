import styled from 'styled-components';

const ReviewDetailesWrap = styled.div`
	border: 1px solid gray;
	border-radius: 4px;
	display: flex;
	height: 100%;
	width: -webkit-fill-available;
`;

const ThumbnailBack = styled.div`
	background-color: #afc0dd52; // 사진 채우고 남는 부분 배경 색
`;

const ThumbnailImg = styled.img`
	width: 500px;
	height: fit-content;
`;
const ReviewContent = styled.div`
	display: flex;
	flex-direction: column;
	border-left: 2px solid #24292433;
	padding: 16px;
`;

const Title = styled.div`
	height: 10%;
	font-size: 36px;
`;

const Review = styled.div`
	height: 60%;
	font-size: 24px;
`;
const StoreInfo = styled.div`
	height: 30%;
	font-size: 20px;
`;

const Store = styled.div``;

const Address = styled.div``;

export {
	ReviewDetailesWrap,
	Title,
	ThumbnailImg,
	ReviewContent,
	StoreInfo,
	Review,
	Store,
	Address,
	ThumbnailBack,
};

import styled from 'styled-components';
import banner from '../../assets/banner.png';

const Img = styled.div`
	background-image: url(${banner});
	background-size: contain;
	width: 100vw;
	height: 328px;
`;

const Frame = styled.div`
	margin-top: 10vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;
const Frame2 = styled.div`
	background-color: #d4bd9b;
	width: 440px;
	height: fit-content;
	border-radius: 30px;
	padding-top: 20px;
	padding-right: 40px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;
const Frame3 = styled.div`
	background-color: #d4bd9b;
	width: 1000px;
	height: fit-content;
	border-radius: 30px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
`;
const Gallery = styled.div`
	padding-right: 10vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Body = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	justify-content: center;
	font-size: 130%;
`;
const GText = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	padding-left: 40px;
`;

const RText = styled.div`
	margin-top: 48px;
	margin-bottom: 32px;
`;

const RR = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export { Img, Gallery, Body, Frame, Frame2, Frame3, GText, RText, RR };

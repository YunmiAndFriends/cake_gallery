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
	width: 500px;
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
	padding-right: 20vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* border: dotted; */
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
	font-size: 32px;
	margin: 16px 24px 24px 24px;
	/* padding-left: 40px; */
`;

const RText = styled.div`
	display: flex;
	margin-top: 48px;
	margin-bottom: 32px;
`;

const RR = styled.div`
	margin-top: 32px;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const MoveButton = styled.div`
	width: fit-content;
	border: 1px solid silver;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 9px 5px 9px;
	margin: 0 8px;
	border-radius: 50%;
	background-color: white;
`;

export { Img, Gallery, Body, Frame, Frame2, Frame3, GText, RText, RR, MoveButton };

import styled from 'styled-components';
import banner from '../../assets/banner.png';

const Img = styled.div`
	background-image: url(${banner});
	background-size: contain;
	width: 100%;
	height: 328px;
`;
const Img2 = styled.img`
	width: 400px;
	height: 240px;
`;
const Img3 = styled.img`
	width: 560px;
	height: 240px;
	justify-content: center;
`;
const Frame = styled.div`
	margin-top: 10vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
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
	justify-content: center;
	font-size: 130%;
`;
const G_Text = styled.div``;
const G2_Text = styled.div``;
const G_Button = styled.button``;
const G_Info = styled.div``;

const R_Text = styled.div`
	margin-top: 48px;
	margin-bottom: 32px;
`;
const R_Info = styled.div`
	align-items: center;
`;

export { Img, Img2, Img3, Gallery, Body, Frame, G_Text, G2_Text, G_Button, G_Info, R_Text, R_Info };

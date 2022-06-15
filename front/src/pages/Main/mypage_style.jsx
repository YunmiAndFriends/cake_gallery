import styled from 'styled-components';

const Frame = styled.div`
	padding-top: 40px;
	padding-bottom: 40px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	background-color: #f6e1e1;
`;

const Frame2 = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;
const Frame3 = styled.div`
	margin-left: 100px;
`;
const Profile = styled.div``;
const P2 = styled.div`
	margin-left: 20px;
`;
const P3 = styled.div`
	display: flex;
	flex-direction: row;
`;

const Info = styled.div`
	font-size: 32px;
`;
const Info_Button = styled.div`
	font-size: 16px;
	margin-bottom: 16px;
`;

const Img = styled.img`
	width: 164px;
	height: 128px;
`;

const Img2 = styled.img`
	width: 144px;
	height: 128px;
`;

const Images = styled.div`
	display: flex;
	flex-direction: row;
	opacity: 70%;
`;

const Img3 = styled.img`
	width: 72px;
	height: 64px;
	margin-top: 8px;
	margin-right: 8px;
`;
const Img4 = styled.img`
	width: 24px;
	height: 24px;
	margin-left: 12px;
`;

const Body = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	font-size: 130%;
`;
const Text = styled.div``;
const Text2 = styled.div`
	margin-top: 10vh;
	margin-left: 40px;
	text-align: left;
	font-size: 32px;
	font-weight: bold;
`;
const Text3 = styled.div``;
const Text4 = styled.div``;
const T5 = styled.div`
	margin-left: 20px;
`;

export { Frame, Frame2, Frame3, Profile, P2, P3, Info, Info_Button, Body, Images };
export { Text, Text2, Text3, Text4, T5, Img, Img2, Img3, Img4 };

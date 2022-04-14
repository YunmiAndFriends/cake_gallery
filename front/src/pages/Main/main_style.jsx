import styled from 'styled-components';
import banner from '../../assets/banner.png';

const Img = styled.div`
	background-image: url(${banner});
	width: 100%;
	height: 80%;
`;
// const Frame = styled.div`
// 	display: flex;
// 	flex-direction: row;
// `;
const Gallery = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const G_Text = styled.div``;
const G2_Text = styled.div``;
const G_Button = styled.button``;
const G_Info = styled.div``;

const R_Text = styled.div``;
const R_Info = styled.div``;

export { Img, Gallery, G_Text, G2_Text, G_Button, G_Info, R_Text, R_Info };

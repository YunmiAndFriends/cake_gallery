import styled from 'styled-components';

const HeaderWrap = styled.div`
	width: 98%;
	display: flex;
	padding: 16px;
	justify-content: space-between;
	align-items: flex-end;
`;

const LogoWrap = styled.div``;
const LogoImg = styled.img`
	width: 200px;
`;

const ButtonWrap = styled.div`
	display: flex;
`;
const MoveButton = styled.div`
	width: fit-content;
	border: none;
	font-size: 24px;
	margin: 0 8px;
	color: brown;
	cursor: pointer;
`;

export { HeaderWrap, LogoWrap, LogoImg, ButtonWrap, MoveButton };

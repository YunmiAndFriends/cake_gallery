import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Header = styled.div`
	display: flex;
	height: 20%;
	justify-content: space-between;
	border-bottom: 3px solid gray;
`;

const Logo = styled.button`
	width: 100px;
	height: 40px;
`;

const Menu = styled.div`
	margin-right: 8px;
`;

const Mypage = styled.button`
	width: 80px;
	margin: 36px;
`;

const Login = styled.button`
	width: 80px;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	/* height: 100vh; */
`;

const Banner = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid gray;
`;

const Writer = styled.div``;

const WriteTime = styled.div``;

const ReviewContent = styled.div`
	display: flex;
	flex-direction: column;
	width: -webkit-fill-available;
	height: 100vh;
	/* background-color: #7eccebcb; */
`;

const TitleData = styled.div`
	border-bottom: 1px solid gray;
`;

const ContentData = styled.div`
	display: flex;
`;

const ThumbnailData = styled.img`
	display: flex;
	width: fit-content;
`;

const ReviewContentData = styled.div`
	display: flex;
`;

export {
	Container,
	Header,
	Logo,
	Menu,
	Mypage,
	Login,
	Banner,
	Content,
	ReviewContent,
	Writer,
	WriteTime,
	TitleData,
	ContentData,
	ThumbnailData,
	ReviewContentData,
};

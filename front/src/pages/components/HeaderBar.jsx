import React from 'react';
import mainLogo from '../../assets/MainLogo.png';
import sendApi from '../../apis/sendApi';
import { HeaderWrap, LogoWrap, LogoImg, ButtonWrap, MoveButton } from './HeaderBar.style';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export default function HeaderBar() {
	const navigate = useNavigate();
	console.log("localStorage.getItem('userId')", localStorage.getItem('userId'));
	const userInfo = useRef(localStorage.getItem('userId') ? localStorage.getItem('userId') : null);

	const onClickLogin = () => {
		navigate('/login');
	};
	const onClickMyPage = () => {
		navigate('/mypage');
	};
	const onClickLogout = () => {
		localStorage.removeItem('userId');
		navigate('/');
	};
	return (
		<HeaderWrap>
			<LogoWrap>
				<LogoImg src={mainLogo} />
			</LogoWrap>
			<ButtonWrap>
				{userInfo.current === null ? (
					<MoveButton onClick={onClickLogin}>Login</MoveButton>
				) : (
					<>
						<MoveButton onClick={onClickMyPage}>MyPage</MoveButton>
						<MoveButton onClick={onClickLogout}>Logout</MoveButton>
					</>
				)}
			</ButtonWrap>
		</HeaderWrap>
	);
}

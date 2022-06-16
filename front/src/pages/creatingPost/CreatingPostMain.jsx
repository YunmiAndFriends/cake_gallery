import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PostingForm from './PostingForm';
import HeaderBar from '../components/HeaderBar';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MainWrapper = styled.div`
	background-color: white;
	width: 80%;
	margin-top: 48px;
	border-radius: 24px;
	box-shadow: 4px 8px 8px 2px rgba(0, 0, 0, 0.26);
	padding: 56px;
`;

const Group = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Writer = styled.div`
	font-size: 16px;
	font-weight: bold;
	margin-left: 8px;
`;
const ButtonWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

const SendButton = styled.button`
	margin-top: 16px;
	margin-left: 16px;
	border: 0;
	background-color: #f6ede1;
	width: 104px;
	padding: 8px;
	border-radius: 48px;
	color: black;
	font-size: 16px;
	font-weight: bold;
	&:hover {
		cursor: pointer;
		border: 1px solid #cfcece;
	}
`;

const CreatingPost = () => {
	const [form, setForm] = useState({
		title: '',
		content: '',
		storeName: '',
		imgUrl: '',
	});

	const onChangeForm = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const cancel = () => {
		console.log('cancle');
	};

	const send = () => {
		console.log('send', form);
	};

	return (
		<Wrapper>
			<HeaderBar />
			<MainWrapper>
				<PostingForm onChangeForm={onChangeForm} formData={form} />
				<ButtonWrap>
					<SendButton onClick={() => send()}>게시글 작성</SendButton>
					<SendButton onClick={() => cancel()}>작성 취소</SendButton>
				</ButtonWrap>
			</MainWrapper>
		</Wrapper>
	);
};

export default CreatingPost;

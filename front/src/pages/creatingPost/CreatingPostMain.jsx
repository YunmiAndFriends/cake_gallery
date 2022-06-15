import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PostingForm from './PostingForm';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MainWrapper = styled.div`
	background-color: white;
	width: 80%;
	margin-top: 88px;
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
	background-color: #f0b138;
	width: 104px;
	padding: 8px;
	border-radius: 48px;
	color: white;
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
		startDate: '',
		startTime: '',
		endDate: '',
		endTime: '',
		hashTags: [],
	});

	const [pictureUrl, setPictureUrl] = useState([]);

	useEffect(() => {}, [pictureUrl]);

	const onChangeForm = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};
	const onChangeHashtags = e => {
		const temp = e.target.value;
		const sliceArr = temp.split(', ');
		setForm({
			...form,
			hashTags: sliceArr,
		});
	};

	const send = async () => {
		const start = form.startDate.concat('T', form.startTime);
		const end = form.endDate.concat('T', form.endTime);
	};

	const cancel = () => {
		console.log('cancle');
	};

	return (
		<Wrapper>
			<MainWrapper>
				<PostingForm
					onChangeForm={onChangeForm}
					setPictureUrl={setPictureUrl}
					pictureUrl={pictureUrl}
					onChangeHashtags={onChangeHashtags}
				/>
				<ButtonWrap>
					<SendButton onClick={() => send(form, pictureUrl)}>게시글 작성</SendButton>
					<SendButton onClick={() => cancel()}>작성 취소</SendButton>
				</ButtonWrap>
			</MainWrapper>
		</Wrapper>
	);
};

export default CreatingPost;

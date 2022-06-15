import React from 'react';
import styled from 'styled-components';
import PictureBox from './PictureBox';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const InputTitle = styled.input`
	background-color: white;
	width: 100%;
	margin: 16px 0 8px;
	font-size: 32px;
	font-weight: bold;
	border: none;
	border-bottom: solid 2px #7a7a7a;
	height: 0px;
	padding: 24px 0;
	&::placeholder {
		color: #b3b3b3;
		margin-left: 0%;
	}
	&:focus {
		outline: none;
		border-bottom: solid 2px #f0b138;
	}
`;
const MiddleWrap = styled.div`
	width: 100%;
	height: 400px;
	border: 0;
	padding: 24px 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
const InputDiv = styled.div`
	height: 400px;
	width: -webkit-fill-available;
	border: 0;
	flex-basis: auto;
	display: flex;
	flex-direction: column;
`;

const Textarea = styled.textarea`
	width: 90%;
	height: 400px;
	border: solid 2px #7a7a7a;
	border-radius: 16px;
	resize: none;
	padding: 24px;
	margin-top: 16px;
	&::placeholder {
		color: #b3b3b3;
	}
	&:focus {
		outline: none;
		border: solid 2px #f0b138;
	}
`;

const PostingForm = ({
	onChangeHashtags,
	onChangeForm,
	setPictureUrl,
	pictureUrl,
	setPostType,
}) => {
	return (
		<Wrapper>
			<InputTitle name="title" onChange={onChangeForm} placeholder="제목" />
			<MiddleWrap>
				<PictureBox setPictureUrl={setPictureUrl} pictureUrl={pictureUrl} />
				<InputDiv>
					<InputTitle name="title" onChange={onChangeForm} placeholder="제목" />

					<Textarea name="content" onChange={onChangeForm} placeholder="내용 쓰기" />
				</InputDiv>
			</MiddleWrap>
		</Wrapper>
	);
};

export default PostingForm;

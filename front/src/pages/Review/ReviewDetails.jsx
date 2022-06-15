import React from 'react';
import {
	Container,
	Header,
	Logo,
	Menu,
	Mypage,
	Login,
	Banner,
	Content,
	ReviewContent,
} from './ReviewDetails.style';
import { Link } from 'react-router-dom';
import ReviewDetailesData from './ReviewDetailesData';

const reviewDetailesData = [
	{
		id: 0,
		title: '케이크 맛집 후기',
		thumbnail: '',
		content: '윤미가 만든 케이크 역시 꿀맛이에용',
		storename: '윤미네 케이크',
		address: '경기도 군포시 한세로 30',
	},
];

const ReviewDetails = () => {
	return (
		<Container>
			<Header>
				<Link to="/">
					<Logo>main</Logo>
				</Link>
				<Menu>
					<Mypage>Mypage</Mypage>
					<Login>Login</Login>
				</Menu>
			</Header>
			<Content>
				<Banner></Banner>
				<ReviewContent>
					{reviewDetailesData.map(gallery => (
						<ReviewDetailesData
							key={gallery.id}
							title={gallery.title}
							thumbnail={gallery.thumbnail}
							content={gallery.content}
							storename={gallery.storename}
							address={gallery.address}
							id={gallery.id}
						/>
					))}
				</ReviewContent>
			</Content>
		</Container>
	);
};

export default ReviewDetails;

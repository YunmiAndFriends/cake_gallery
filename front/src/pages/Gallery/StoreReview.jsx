import React from 'react';
import { Container } from './StoreReview.style';
import StoreReviewData from './StoreReviewData';

const storeReviewData = [
	{
		id: 0,
		name: '시그니처 레인케이크',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSP0u7NCoK9DC0kwCvbPeFn0-0O7CfmtT6Q&usqp=CAU',
		content: '넘 맛있어용',
	},
	{
		id: 1,
		name: '시그니처 레인케이크',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSP0u7NCoK9DC0kwCvbPeFn0-0O7CfmtT6Q&usqp=CAU',
		content: '꿀맛',
	},
	{
		id: 2,
		name: '시그니처 레인케이크',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSP0u7NCoK9DC0kwCvbPeFn0-0O7CfmtT6Q&usqp=CAU',
		content: '냠냠',
	},
	{
		id: 3,
		name: '시그니처 레인케이크',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSP0u7NCoK9DC0kwCvbPeFn0-0O7CfmtT6Q&usqp=CAU',
		content: '뇨미',
	},
	{
		id: 4,
		name: '시그니처 레인케이크',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSP0u7NCoK9DC0kwCvbPeFn0-0O7CfmtT6Q&usqp=CAU',
		content: '군포',
	},
	{
		id: 5,
		name: '시그니처 레인케이크',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSP0u7NCoK9DC0kwCvbPeFn0-0O7CfmtT6Q&usqp=CAU',
		content: '군포',
	},
	{
		id: 6,
		name: '시그니처 레인케이크',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSP0u7NCoK9DC0kwCvbPeFn0-0O7CfmtT6Q&usqp=CAU',
		content: '군포',
	},
];

const StoreReview = () => {
	return (
		<Container>
			{storeReviewData.map(gallery => (
				<StoreReviewData
					key={gallery.id}
					name={gallery.name}
					thumbnail={gallery.thumbnail}
					content={gallery.content}
					id={gallery.id}
				/>
			))}
		</Container>
	);
};

export default StoreReview;

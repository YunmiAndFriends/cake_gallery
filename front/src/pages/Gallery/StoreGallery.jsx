import React from 'react';
import { Container } from './StoreGallery.style';
import StoreGalleryDate from './StoreGalleryData';

const storegalleryData = [
	{
		id: 0,
		name: '시그니처 레인케이크',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4XkI7I7tjSxJfbqyuvW7KnvAMvbgRMdudw&usqp=CAU',
		content: '딸기크림과 크림치즈를 사용한',
	},
	{
		id: 1,
		name: '시그니처 레인케이크',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4XkI7I7tjSxJfbqyuvW7KnvAMvbgRMdudw&usqp=CAU',
		content: '딸기크림과 크림치즈를 사용한',
	},
	{
		id: 2,
		name: '시그니처 레인케이크',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4XkI7I7tjSxJfbqyuvW7KnvAMvbgRMdudw&usqp=CAU',
		content: '딸기크림과 크림치즈를 사용한',
	},
	{
		id: 3,
		name: '시그니처 레인케이크',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4XkI7I7tjSxJfbqyuvW7KnvAMvbgRMdudw&usqp=CAU',
		content: '딸기크림과 크림치즈를 사용한',
	},
	{
		id: 4,
		name: '시그니처 레인케이크',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4XkI7I7tjSxJfbqyuvW7KnvAMvbgRMdudw&usqp=CAU',
		content: '딸기크림과 크림치즈를 사용한',
	},
	{
		id: 5,
		name: '시그니처 레인케이크',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4XkI7I7tjSxJfbqyuvW7KnvAMvbgRMdudw&usqp=CAU',
		content: '딸기크림과 크림치즈를 사용한',
	},
	{
		id: 6,
		name: '시그니처 레인케이크',
		thumbnail:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4XkI7I7tjSxJfbqyuvW7KnvAMvbgRMdudw&usqp=CAU',
		content: '딸기크림과 크림치즈를 사용한',
	},
];

const StoreGallery = () => {
	return (
		<Container>
			{storegalleryData.map(gallery => (
				<StoreGalleryDate
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

export default StoreGallery;

import React from 'react';

interface IPostItem {
	title: string;
	desc?: string;
}

const PostItem = ({ title, desc = '' }: IPostItem) => {
	return (
		<li>
			<h2>{title}</h2>
			{desc ? <p>{desc}</p> : ''}
		</li>
	);
};

export default PostItem;

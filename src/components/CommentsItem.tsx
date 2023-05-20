import React from 'react';

interface ICommentsItem {
	name: string;
	email: string;
	body: string;
}

const CommentItem = ({ name, email, body }: ICommentsItem) => {
	return (
		<li>
			<h3>{name}</h3>
			<strong>{email}</strong>
			<p>{body}</p>
		</li>
	);
};

export default CommentItem;

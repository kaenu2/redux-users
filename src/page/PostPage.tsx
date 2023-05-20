import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PostItem from '../components/PostItem';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActiions } from '../hooks/useActiions';
import CommentItem from '../components/CommentsItem';

const PostPage = () => {
	const { id: paramId } = useParams();
	const { fetchPost, fetchPostComments } = useActiions();

	useEffect(() => {
		fetchPost(Number(paramId));
		fetchPostComments(Number(paramId));
	}, []);

	const { error, isLoading, post } = useTypedSelector(state => state.post);
	const {
		comments,
		error: commentsError,
		isLoading: commentsIsLoading
	} = useTypedSelector(state => state.comments);

	if (error) {
		return <h1>{error}</h1>;
	}

	if (isLoading || commentsIsLoading) {
		return <h1>Загрузка...</h1>;
	}

	return (
		<section>
			<ul>
				{post && (
					<PostItem
						title={post.title}
						desc={post.body}
					/>
				)}
			</ul>
			<h2>Comments</h2>
			{commentsError ? (
				<h1>{error}</h1>
			) : (
				comments.map(elem => {
					return (
						<CommentItem
							body={elem.body}
							email={elem.email}
							name={elem.name}
						/>
					);
				})
			)}
		</section>
	);
};

export default PostPage;

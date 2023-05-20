import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActiions } from '../hooks/useActiions';
import PostItem from './PostItem';

const PostsList: React.FC = () => {
	const { error, isLoading, posts } = useTypedSelector(
		state => state.userPosts
	);
	const { fetchUserPost } = useActiions();
	const params = useParams();

	useEffect(() => {
		fetchUserPost(Number(params.id));
	}, []);

	if (error) {
		return <h1>{error}</h1>;
	}

	if (isLoading) {
		return <h1>Загрузка...</h1>;
	}

	return (
		<section>
			<ul>
				{posts.map(elem => {
					const { id, title } = elem;
					return (
						<Link
							key={id}
							to={`/post/${id}`}
						>
							<PostItem title={title} />
						</Link>
					);
				})}
			</ul>
		</section>
	);
};

export default PostsList;

import React from 'react';
import PostsList from '../components/PostsList';
import TodoList from '../components/TodoList';
import AlbumList from '../components/AlbumList';

const UserProfile = () => {
	return (
		<div>
			<section>
				<h1>Posts</h1>
				<PostsList />
			</section>
			<section>
				<h1>Todo</h1>
				<TodoList />
			</section>
			<section>
				<h1>Albums</h1>
				<AlbumList />
			</section>
		</div>
	);
};

export default UserProfile;

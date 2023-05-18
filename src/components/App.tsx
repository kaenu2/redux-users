import React from 'react';
import UserList from './UserList';
import TodoList from './TodoList';

export const App = () => {
	return (
		<div>
			<h1>Text</h1>
			<UserList />
			<hr />
			<TodoList />
		</div>
	);
};

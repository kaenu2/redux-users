import React from 'react';

interface ITodoItem {
	id?: number;
	title: string;
	completed: boolean;
}

const TodoItem = ({ id, title, completed }: ITodoItem) => {
	return (
		<li key={id}>
			<p className={completed ? 'todo__item _completed' : 'todo__item'}>
				<strong>{id}</strong> - {title}
			</p>
		</li>
	);
};

export default TodoItem;

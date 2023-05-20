import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActiions } from '../hooks/useActiions';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
	const { error, isLoading, todos } = useTypedSelector(state => state.todo);
	const params = useParams();
	const { fetchTodos } = useActiions();

	useEffect(() => {
		fetchTodos(Number(params.id));
	}, []);

	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<section
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}
		>
			<ul>
				{isLoading ? (
					<h1>Идет загрузка...</h1>
				) : (
					todos.map(todo => {
						const { id, title, completed } = todo;
						return (
							<TodoItem
								key={id}
								id={id}
								title={title}
								completed={completed}
							/>
						);
					})
				)}
			</ul>
		</section>
	);
};

export default TodoList;

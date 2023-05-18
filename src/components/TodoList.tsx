import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActiions } from '../hooks/useActiions';

const TodoList: React.FC = () => {
	const { page, error, isLoading, limit, todos } = useTypedSelector(
		state => state.todo
	);
	const { fetchTodos, setTodoPage } = useActiions();
	const pages = [1, 2, 3, 4, 5];

	useEffect(() => {
		fetchTodos(page, limit);
	}, [page]);

	if (isLoading) {
		return <h1>Идет загрузка...</h1>;
	}
	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<>
			<ul>
				{todos.map(todo => {
					const { id, title } = todo;
					return (
						<li key={id}>
							{id}- {title}
						</li>
					);
				})}
			</ul>
			<div style={{ display: 'flex', gap: '15px' }}>
				{pages.map(p => {
					return (
						<div
							key={p}
							style={{
								border: p === page ? '2px solid blue' : '2px solid green',
								padding: '5px'
							}}
							onClick={() => setTodoPage(p)}
						>
							{p}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default TodoList;

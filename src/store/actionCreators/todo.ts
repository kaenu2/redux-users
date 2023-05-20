import { Dispatch } from 'redux';
import axios from 'axios';

import { TodoAction, TodoActionTypes } from '../../types/todo';

export const fetchTodos = (id: number) => {
	return async (dispatch: Dispatch<TodoAction>) => {
		try {
			dispatch({ type: TodoActionTypes.FETCH_TODOS });
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/users/${id}/todos`
			);
			setTimeout(() => {
				dispatch({
					type: TodoActionTypes.FETCH_TODOS_SUCCESS,
					payload: response.data
				});
			}, 500);
		} catch (e) {
			dispatch({
				type: TodoActionTypes.FETCH_TODOS_ERROR,
				payload: 'Произошла ошибка при загрузке задач'
			});
		}
	};
};

export const setTodoPage = (page: number): TodoAction => {
	return { type: TodoActionTypes.SET_TODOS_PAGE, payload: page };
};

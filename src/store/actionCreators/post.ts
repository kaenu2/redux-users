import { Dispatch } from 'redux';
import axios from 'axios';

import { PostsAction, PostsActionTypes } from '../../types/post';

export const fetchPost = (id: number) => {
	return async (dispatch: Dispatch<PostsAction>) => {
		try {
			dispatch({ type: PostsActionTypes.FETCH_POSTS });
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${id}`
			);
			setTimeout(() => {
				dispatch({
					type: PostsActionTypes.FETCH_POSTS_SUCCESS,
					payload: response.data
				});
			}, 500);
		} catch (e) {
			dispatch({
				type: PostsActionTypes.FETCH_POSTS_ERROR,
				payload: 'Произошла ошибка при загрузке поста'
			});
		}
	};
};

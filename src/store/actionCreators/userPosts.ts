import { Dispatch } from 'redux';
import axios from 'axios';
import { UserPostAction, UserPostsActionType } from '../../types/userPosts';

export const fetchUserPost = (id: number) => {
	return async (dispatch: Dispatch<UserPostAction>) => {
		try {
			dispatch({ type: UserPostsActionType.FETCH_USER_POSTS });
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/users/${id}/posts`
			);
			dispatch({
				type: UserPostsActionType.FETCH_USER_POSTS_SUCCESS,
				payload: response.data
			});
		} catch (error) {
			dispatch({
				type: UserPostsActionType.FETCH_USER_POSTS_ERROR,
				payload: 'Произошла ошибка при загрузке постов'
			});
		}
	};
};

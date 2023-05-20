import { Dispatch } from 'redux';
import axios from 'axios';

import {
	PostCommentsAction,
	PostCommentsActionType
} from '../../types/postComments';

export const fetchPostComments = (id: number) => {
	return async (dispatch: Dispatch<PostCommentsAction>) => {
		try {
			dispatch({ type: PostCommentsActionType.FETCH_POST_COMMENTS });
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/posts/${id}/comments`
			);
			dispatch({
				type: PostCommentsActionType.FETCH_POST_COMMENTS_SUCCES,
				payload: response.data
			});
		} catch (e) {
			dispatch({
				type: PostCommentsActionType.FETCH_POST_COMMENTS_ERROR,
				payload: 'Произошла ошибка при загрузке комментариев'
			});
		}
	};
};

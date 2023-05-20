import { Dispatch } from 'redux';
import axios from 'axios';

import { UserAlbumAction, UserAlbumActionTypes } from '../../types/userAlbums';

export const FetchUserAlbum = (id: number) => {
	return async (dispatch: Dispatch<UserAlbumAction>) => {
		try {
			dispatch({ type: UserAlbumActionTypes.FETCH_USER_ALBUM });
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/users/${id}/albums`
			);
			dispatch({
				type: UserAlbumActionTypes.FETCH_USER_ALBUM_SUCCESS,
				payload: response.data
			});
		} catch (e) {
			dispatch({
				type: UserAlbumActionTypes.FETCH_USER_ALBUM_ERROR,
				payload: 'Произошла ошибка при загрузке альбомов'
			});
		}
	};
};

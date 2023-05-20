import { Dispatch } from 'redux';
import axios from 'axios';

import {
	AlbumPhotosAction,
	AlbumPhotosActionType
} from '../../types/albumPhotos';

export const fetchAlbumPhotos = (id: number) => {
	return async (dispatch: Dispatch<AlbumPhotosAction>) => {
		try {
			dispatch({ type: AlbumPhotosActionType.FETCH_POST_ALBUM_PHOTO });
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/albums/${id}/photos`
			);
			dispatch({
				type: AlbumPhotosActionType.FETCH_POST_ALBUM_PHOTO_SUCCESS,
				payload: response.data
			});
		} catch (e) {
			dispatch({
				type: AlbumPhotosActionType.FETCH_POST_ALBUM_PHOTO_ERROR,
				payload: 'Произошла ошибка при загрузке фотографий'
			});
		}
	};
};

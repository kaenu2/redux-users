import {
	AlbumPhotoState,
	AlbumPhotosAction,
	AlbumPhotosActionType
} from '../../types/albumPhotos';

const initialState: AlbumPhotoState = {
	photos: [],
	error: null,
	isLoading: false
};

export const albumPhotoReducer = (
	state = initialState,
	action: AlbumPhotosAction
): AlbumPhotoState => {
	switch (action.type) {
		case AlbumPhotosActionType.FETCH_POST_ALBUM_PHOTO:
			return { ...state, isLoading: true };
		case AlbumPhotosActionType.FETCH_POST_ALBUM_PHOTO_SUCCESS:
			return { ...state, isLoading: false, photos: action.payload };
		case AlbumPhotosActionType.FETCH_POST_ALBUM_PHOTO_ERROR:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};

import {
	IUserAlbumState,
	UserAlbumAction,
	UserAlbumActionTypes
} from '../../types/userAlbums';

const initialState: IUserAlbumState = {
	albums: [],
	error: null,
	isLoading: false
};

export const userAlbumReducer = (
	state = initialState,
	action: UserAlbumAction
): IUserAlbumState => {
	switch (action.type) {
		case UserAlbumActionTypes.FETCH_USER_ALBUM:
			return { ...state, isLoading: true };
		case UserAlbumActionTypes.FETCH_USER_ALBUM_SUCCESS:
			return { ...state, isLoading: false, albums: action.payload };
		case UserAlbumActionTypes.FETCH_USER_ALBUM_ERROR:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};

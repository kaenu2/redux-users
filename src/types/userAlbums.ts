export interface IUserAlbumState {
	albums: IAlbum[];
	isLoading: boolean;
	error: null | string;
}
export interface IAlbum {
	userId: number;
	id: number;
	title: string;
}

export enum UserAlbumActionTypes {
	FETCH_USER_ALBUM = 'FETCH_USER_ALBUM',
	FETCH_USER_ALBUM_SUCCESS = 'FETCH_USER_ALBUM_SUCCESS',
	FETCH_USER_ALBUM_ERROR = 'FETCH_USER_ALBUM_ERROR'
}

interface FetchUserAlbum {
	type: UserAlbumActionTypes.FETCH_USER_ALBUM;
}
interface FetchUserAlbumSuccess {
	type: UserAlbumActionTypes.FETCH_USER_ALBUM_SUCCESS;
	payload: IAlbum[];
}
interface FetchUserAlbumError {
	type: UserAlbumActionTypes.FETCH_USER_ALBUM_ERROR;
	payload: string;
}

export type UserAlbumAction =
	| FetchUserAlbum
	| FetchUserAlbumSuccess
	| FetchUserAlbumError;

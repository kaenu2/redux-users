export interface AlbumPhotoState {
	photos: IPhoto[];
	isLoading: boolean;
	error: string | null;
}

export interface IPhoto {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}

export enum AlbumPhotosActionType {
	FETCH_POST_ALBUM_PHOTO = 'FETCH_POST_ALBUM_PHOTO',
	FETCH_POST_ALBUM_PHOTO_SUCCESS = 'FETCH_POST_ALBUM_PHOTO_SUCCESS',
	FETCH_POST_ALBUM_PHOTO_ERROR = 'FETCH_POST_ALBUM_PHOTO_ERROR'
}

interface FetchAlbumPhotoAction {
	type: AlbumPhotosActionType.FETCH_POST_ALBUM_PHOTO;
}
interface FetchAlbumPhotoSuccessAction {
	type: AlbumPhotosActionType.FETCH_POST_ALBUM_PHOTO_SUCCESS;
	payload: IPhoto[];
}
interface FetchAlbumPhotoErrorAction {
	type: AlbumPhotosActionType.FETCH_POST_ALBUM_PHOTO_ERROR;
	payload: string;
}

export type AlbumPhotosAction =
	| FetchAlbumPhotoAction
	| FetchAlbumPhotoSuccessAction
	| FetchAlbumPhotoErrorAction;

import { IPost } from './post';

export interface UserPostsState {
	posts: IPost[];
	isLoading: boolean;
	error: null | string;
}

export enum UserPostsActionType {
	FETCH_USER_POSTS = 'FETCH_USER_POSTS',
	FETCH_USER_POSTS_SUCCESS = 'FETCH_USER_POSTS_SUCCESS',
	FETCH_USER_POSTS_ERROR = 'FETCH_USER_POSTS_ERROR'
}

interface FetchUserPostsAction {
	type: UserPostsActionType.FETCH_USER_POSTS;
}
interface FetchUserPostsActionSuccess {
	type: UserPostsActionType.FETCH_USER_POSTS_SUCCESS;
	payload: IPost[];
}
interface FetchUserPostsActionError {
	type: UserPostsActionType.FETCH_USER_POSTS_ERROR;
	payload: string;
}

export type UserPostAction =
	| FetchUserPostsAction
	| FetchUserPostsActionSuccess
	| FetchUserPostsActionError;

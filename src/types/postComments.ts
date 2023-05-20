export interface IComments {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

export interface ICommentsState {
	comments: IComments[];
	isLoading: boolean;
	error: string | null;
}

export enum PostCommentsActionType {
	FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS',
	FETCH_POST_COMMENTS_SUCCES = 'FETCH_POST_COMMENTS_SUCCES',
	FETCH_POST_COMMENTS_ERROR = 'FETCH_POST_COMMENTS_ERROR'
}

interface FetchPostComments {
	type: PostCommentsActionType.FETCH_POST_COMMENTS;
}
interface FetchPostCommentsSucces {
	type: PostCommentsActionType.FETCH_POST_COMMENTS_SUCCES;
	payload: IComments[];
}
interface FetchPostCommentsError {
	type: PostCommentsActionType.FETCH_POST_COMMENTS_ERROR;
	payload: string;
}

export type PostCommentsAction =
	| FetchPostComments
	| FetchPostCommentsSucces
	| FetchPostCommentsError;

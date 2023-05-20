export interface UserState {
	users: IUser[];
	isLoading: boolean;
	error: null | string;
}

export interface IUser {
	id: 1;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
}

export enum UserActionTypes {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUserAction {
	type: UserActionTypes.FETCH_USERS;
}
interface FetchUserSuccessAction {
	type: UserActionTypes.FETCH_USERS_SUCCESS;
	payload: IUser[];
}
interface FetchUserErrorAction {
	type: UserActionTypes.FETCH_USERS_ERROR;
	payload: string;
}

export type UserAction =
	| FetchUserAction
	| FetchUserSuccessAction
	| FetchUserErrorAction;

import {
	UserPostAction,
	UserPostsActionType,
	UserPostsState
} from '../../types/userPosts';

const initialState: UserPostsState = {
	posts: [],
	error: null,
	isLoading: false
};

export const userPostsReducer = (
	state = initialState,
	action: UserPostAction
): UserPostsState => {
	switch (action.type) {
		case UserPostsActionType.FETCH_USER_POSTS:
			return { ...state, isLoading: true };
		case UserPostsActionType.FETCH_USER_POSTS_SUCCESS:
			return { ...state, isLoading: false, posts: action.payload };
		case UserPostsActionType.FETCH_USER_POSTS_ERROR:
			return { ...state, isLoading: false, error: action.payload };

		default:
			return state;
	}
};

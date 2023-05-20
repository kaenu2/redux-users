import { PostState, PostsAction, PostsActionTypes } from '../../types/post';

const initialState: PostState = {
	post: null,
	isLoading: false,
	error: null
};

export const postReducer = (
	state = initialState,
	action: PostsAction
): PostState => {
	switch (action.type) {
		case PostsActionTypes.FETCH_POSTS:
			return { ...state, isLoading: true };
		case PostsActionTypes.FETCH_POSTS_SUCCESS:
			return { ...state, isLoading: false, post: action.payload };
		case PostsActionTypes.FETCH_POSTS_ERROR:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};

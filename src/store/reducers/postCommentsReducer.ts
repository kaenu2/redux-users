import {
	ICommentsState,
	PostCommentsAction,
	PostCommentsActionType
} from '../../types/postComments';

const initialState: ICommentsState = {
	comments: [],
	error: null,
	isLoading: false
};

export const postCommentsReducer = (
	state = initialState,
	action: PostCommentsAction
): ICommentsState => {
	switch (action.type) {
		case PostCommentsActionType.FETCH_POST_COMMENTS:
			return { ...state, isLoading: true };
		case PostCommentsActionType.FETCH_POST_COMMENTS_SUCCES:
			return { ...state, isLoading: false, comments: action.payload };
		case PostCommentsActionType.FETCH_POST_COMMENTS_ERROR:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};

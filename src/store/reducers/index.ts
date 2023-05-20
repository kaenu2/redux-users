import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { todoReducer } from './todoReducer';
import { postReducer } from './postReducer';
import { userPostsReducer } from './userPostsReducer';
import { postCommentsReducer } from './postCommentsReducer';
import { userAlbumReducer } from './userAlbumReducer';
import { albumPhotoReducer } from './albumPhotoReducer';

export const rootReducer = combineReducers({
	user: userReducer,
	todo: todoReducer,
	userPosts: userPostsReducer,
	post: postReducer,
	comments: postCommentsReducer,
	albums: userAlbumReducer,
	photos: albumPhotoReducer
});

export type RootState = ReturnType<typeof rootReducer>;

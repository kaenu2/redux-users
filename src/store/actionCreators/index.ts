import * as UserActionCreator from './user';
import * as TodoActionCreator from './todo';
import * as PostActionCreator from './post';
import * as UserPostActionCreator from './userPosts';
import * as PostCommentsActionCreator from './postComments';
import * as UserAlbumActionCreator from './userAlbum';
import * as AlbumPhotoActionCreator from './albumPhotos';

export default {
	...TodoActionCreator,
	...UserActionCreator,
	...PostActionCreator,
	...UserPostActionCreator,
	...PostCommentsActionCreator,
	...UserAlbumActionCreator,
	...AlbumPhotoActionCreator
};

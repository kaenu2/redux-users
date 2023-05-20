import React from 'react';
import { IPhoto } from '../types/albumPhotos';

interface IPhotoItem {
	thumbnailUrl: string;
	title: string;
	url: string;
}

const PhotoItem = ({ thumbnailUrl, title, url }: IPhotoItem) => {
	return (
		<li>
			<img
				src={url}
				alt={title}
			/>
		</li>
	);
};

export default PhotoItem;

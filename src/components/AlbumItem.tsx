import React from 'react';
import { Link } from 'react-router-dom';

import { IAlbum } from '../types/userAlbums';

interface IAlbumItem {
	id: number;
	title: string;
}

const AlbumItem = ({ id, title }: IAlbumItem) => {
	return (
		<li>
			<Link to={`/album/${id}`}>{title}</Link>
		</li>
	);
};

export default AlbumItem;

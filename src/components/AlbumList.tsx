import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActiions } from '../hooks/useActiions';
import AlbumItem from './AlbumItem';

const AlbumList = () => {
	const { albums, error, isLoading } = useTypedSelector(state => state.albums);
	const { id: paramId } = useParams();
	const { FetchUserAlbum } = useActiions();

	useEffect(() => {
		FetchUserAlbum(Number(paramId));
	}, []);

	if (error) {
		return <h1>{error}</h1>;
	}

	if (isLoading) {
		return <h1>Загрузка...</h1>;
	}

	return (
		<ul>
			{albums.map(elem => {
				const { id, title } = elem;
				return (
					<AlbumItem
						key={id}
						id={id}
						title={title}
					/>
				);
			})}
		</ul>
	);
};

export default AlbumList;

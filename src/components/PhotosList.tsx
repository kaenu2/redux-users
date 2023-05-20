import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActiions } from '../hooks/useActiions';
import PhotoItem from './PhotoItem';

const PhotosList = () => {
	const { error, isLoading, photos } = useTypedSelector(state => state.photos);
	const { fetchAlbumPhotos } = useActiions();
	const { id: idParam } = useParams();

	useEffect(() => {
		fetchAlbumPhotos(Number(idParam));
	}, []);

	if (error) {
		return <h1>{error}</h1>;
	}

	if (isLoading) {
		return <h1>Загрузка...</h1>;
	}

	return (
		<ul>
			{photos.map(elem => {
				const { id, albumId, thumbnailUrl, title, url } = elem;
				return (
					<PhotoItem
						key={id}
						thumbnailUrl={thumbnailUrl}
						title={title}
						url={url}
					/>
				);
			})}
		</ul>
	);
};

export default PhotosList;

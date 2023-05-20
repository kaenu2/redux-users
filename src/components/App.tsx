import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import UsersPage from '../page/UsersPage';
import UserProfile from '../page/UserProfilePage';
import PostPage from '../page/PostPage';
import PhotoPage from '../page/PhotoPage';

export const App = () => {
	return (
		<div>
			<Header />
			<hr />
			<main
				style={{
					display: 'flex',
					justifyContent: 'center',
					padding: '15px'
				}}
			>
				<Routes>
					<Route
						path='/'
						element={<UsersPage />}
					/>
					<Route
						path='/users/:id'
						element={<UserProfile />}
					/>
					<Route
						path='/post/:id'
						element={<PostPage />}
					/>
					<Route
						path='album/:id'
						element={<PhotoPage />}
					/>
				</Routes>
			</main>
		</div>
	);
};

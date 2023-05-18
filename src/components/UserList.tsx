import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActiions } from '../hooks/useActiions';

const UserList: React.FC = () => {
	const { error, isLoading, users } = useTypedSelector(state => state.user);
	const { fetchUsers } = useActiions();

	useEffect(() => {
		fetchUsers();
	}, []);

	if (isLoading) {
		return <h1>Идет загрузка...</h1>;
	}
	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<ul>
			{users.map(user => {
				return <li key={user.id}>{user.name}</li>;
			})}
		</ul>
	);
};

export default UserList;

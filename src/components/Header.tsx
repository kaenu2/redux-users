import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<nav>
				<ul style={{ display: 'flex', gap: '30px' }}>
					<li>
						<Link to='/'>Home</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

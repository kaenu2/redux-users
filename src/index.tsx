import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';

import './index.css';

import { App } from './components/App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	// <Provider>
	<App />
	// </Provider>
);

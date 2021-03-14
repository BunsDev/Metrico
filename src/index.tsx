import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';
/// @dev serviceWorker not currently in use
// import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './Store'


ReactDOM.render(
	<React.StrictMode>
		<StoreProvider>
			<Router>
				<App />
			</Router>
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

/// @dev serviceWorker not currently in use
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { Header } from './sections/Header/Header';
import { Search } from './sections/Search/Search';
import { CoinProfile } from './sections/CoinProfile/CoinProfile';
import { Store } from './Store'


const App = (): JSX.Element => {
	const { dispatch } = React.useContext(Store)

	const handleSearchSubmit = (coin: string) => {
		dispatch({
			type: 'UPDATE_CURRENT_COIN',
			payload: coin
		})
	};

	return (
		<div className='App'>
			<header>
				<Header />
			</header>
			<main>
				<Switch>
					<Route exact path='/'>
						<>
							<Search handleSubmit={handleSearchSubmit} type='coinProfile' />
							<CoinProfile />
						</>
					</Route>
				</Switch>
			</main>
		</div>
	);
};

export default App;

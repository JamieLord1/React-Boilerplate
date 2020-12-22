import React, { lazy, Suspense } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

const Login = lazy(() => import('./views/Login'))
const Home = lazy(() => import('./views/Home'))

const renderLoader = () => <p>loading</p>

function App() {
	return (
		<Suspense fallback={renderLoader()}>
			<Router>
				<>
					<Switch>
						<Route exact path="/">
							<Login />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
					</Switch>
				</>
			</Router>
		</Suspense>
	);
}

export default App;

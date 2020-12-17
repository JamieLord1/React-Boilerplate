import React, { lazy, Suspense, useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from 'react-router-dom';
import Modal from './components1/Modal';

const Button = lazy(() => import('./components1/Button'))
const Home = lazy(() => import('./views1/Home'))

const renderLoader = () => <p>loading</p>

function App() {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<Suspense fallback={renderLoader()}>
			<Router>
				<>
					<nav>
						<ul>
							<li>
								<Link to="/home">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/users">Users</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route exact path="/">
							<Button>Contact Us</Button>
							<div>
								<button type="button" onClick={() => setIsOpen(true)}>Open Modal</button>
								<Modal open={isOpen} onClose={() => setIsOpen(false)}>
									<h2>Hi</h2>
									<h2>Hi</h2>
									<h2>Hi</h2>
									<h2>Hi</h2>
									<h2>Hi</h2>
									<h2>Hi</h2>
									<h2>Hi</h2>
									<h2>Hi</h2>
									<div style={{ width: 500 }} />

								</Modal>
							</div>
							<div>Other Content</div>
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

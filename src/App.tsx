import React, { lazy, Suspense, useState } from 'react';
import toast from 'react-hot-toast';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from 'react-router-dom';
import Input from './components/Input';
import Modal from './components/Modal';
// import Notification from './components/Notification';

const Button = lazy(() => import('./components/Button'))
const Home = lazy(() => import('./views/Home'))

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
									<div style={{ width: 500 }} />
								</Modal>
							</div>
							<div>Other Content</div>
							<button type="button" onClick={() => toast.success('Notifcation')}>Test</button>
							<br />
							<Input type="password" />
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

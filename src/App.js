import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.js';
import AboutPage from './components/pages/about.js';
import DiscoverPage from './components/pages/discover.js';
import SearchPage from './components/pages/search.js';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Route exact path="/" component={AboutPage} />
				<Route exact path="/discover" component={DiscoverPage} />
				<Route exact path="/search" component={SearchPage} />
			</div>
		</Router>
	);
}

export default App;

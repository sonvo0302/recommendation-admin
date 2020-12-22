import React from 'react';
import { Router, Route } from 'react-router-dom';

import Routers from './router';
import history from './utils/history';
import './App.css';
import 'antd/dist/antd.css';

function App() {
	return (
		<Router history={history}>
			<Routers />
		</Router>
	);
}

export default App;

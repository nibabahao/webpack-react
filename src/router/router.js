import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../pages/home/home';
import Page1 from '../pages/page1/page1';
import Counter from '../pages/counter/counter';

const getRouter = () => (
	<Router>
		<ul>
			<li><Link to="/">首页</Link></li>
			<li><Link to="/page1">Page1</Link></li>
			<li><Link to="/counter">Counter</Link></li>
		</ul>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/page1" component={Page1}/>
			<Route path="/counter" component={Counter} />
		</Switch>
	</Router>
);

export default getRouter;
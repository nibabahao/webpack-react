import * as React from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

class Hello extends React.Component<{}, {}> {
	render() {
			return <h1>Hello</h1>;
	}
}

class About extends React.Component<{}, {}> {
	render() {
			return <h1>About</h1>;
	}
}

class Contact extends React.Component<{}, {}> {
	render() {
			return <h1>Contact</h1>;
	}
}

class Always extends React.Component<{}, {}> {
	render() {
			return <h1>Always</h1>;
	}
}

class NoMatchs extends React.Component<{}, {}> {
	render() {
			return <h1>NoMatchs</h1>;
	}
}

class Header extends React.Component<{}, {}> {
	render() {
		return (
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
    </ul>
		)
	}
}

const AppRouter = () => (
	<Router>
		<Header/>
		{/* <Switch>
			<Route path="/about" component={About}/>
			<Route path="/contact" component={Contact}/>
			<Route component={Always}/>
		</Switch> */}
		{/* <Switch>
			<Route path="/" exact component={Hello}/>
			<Route path="/about" component={About}/>
			<Route path="/contact" component={Contact}/>
		</Switch> */}
		<Switch>
			<Route path="/" exact component={Hello}/>
			<Route path="/about" component={About}/>
			<Route path="/contact" component={Contact}/>
			<Route component={NoMatchs}/>
		</Switch>
	</Router>
)

export default AppRouter;
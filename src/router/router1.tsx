import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

class User extends React.Component<{}, {}> {
	render() {
			return <h1>User</h1>;
	}
}

const AppRouter = () => (
	<Router>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">about</Link>
			</li>
			<li>
				<Link to="user">user</Link>
			</li>
		</ul>
		<Route path="/" exact component={Hello}/>
		<Route path="/about" component={About}/>
		<Route path="/user" component={User}/>
	</Router>
)

export default AppRouter;
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

const Topic = ({ match }: any) :any => ( <h3>Topic {match.params.id}</h3>);



const Topics = ({ match }: any) :any => {
	return (			
		<div>
			<h1>Topics</h1>
			<ul>
				<li>
					<Link to={`${match.url}/components`}>Components</Link>
				</li>
				<li>
					<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
				</li>
			</ul>

			<Route path={`${match.path}/:id`} component={Topic} />
			<Route
				exact
				path={match.path}
				render={() => <h3>Please select a topic.</h3>}
			/>
		</div>
	)
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
					<Link to="/topics">Topics</Link>
				</li>
    </ul>
		)
	}
}

const AppRouter = () => (
	<Router>
		<Header/>
		<Route path="/" exact component={Hello}/>
		<Route path="/about" component={About}/>
		<Route path="/topics" component={Topics}/>
	</Router>
)

export default AppRouter;
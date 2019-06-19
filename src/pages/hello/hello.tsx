import * as React from 'react';

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' props 的大致形状.
// State是不用设置，  用'{}'设置 .
export class Hello extends React.Component<HelloProps, {}> {
	render() {
			return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
	}
}
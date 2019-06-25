import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './pages/hello/hello';
import AppRouter from './router/router3';

[1,2,3].filter(e => e !== 1)

const router = AppRouter()

ReactDOM.render(
	// <Hello compiler="Typescript" framework="React"/>,
	router,
	document.getElementById('root')
)


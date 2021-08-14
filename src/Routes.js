import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';


const Routes = () => (
	<Switch>
		<Route path="/" exact component={Home} />
		{/*<Route path="/settings" component={Settings} />*/}
		{/*<Route path="/notifications" component={Notifications} />*/}
		<Route path="/movies/:pageId" component={Movie} />

	</Switch>
);

export default Routes;
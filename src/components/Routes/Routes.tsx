import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Cude } from '../../pages/HomePage/components/Cude/Cude';
import { GradientSnake } from '../../pages/HomePage/components/GradientSnake/GradientSnake';
import { HomePage } from '../../pages/HomePage/HomePage';

export const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/cude" component={Cude} />
			<Route exact path="/snake" component={GradientSnake} />
			<Redirect to="/" />
		</Switch>
	)
};
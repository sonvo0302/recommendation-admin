import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { PrivateRoute, Header } from './components';
import { Home, Login, Register, Film, FilmDetail, TrendingFilm, Profile, ChangePassword } from './pages';
import {
	PATH_HOME,
	PATH_LOGIN,
	PATH_REGISTER,
	PATH_FILM,
	PATH_FILM_DETAIL,
	PATH_CATEGORY,
	PATH_PROFILE,
	PATH_CHANGE_PASSWORD
} from './constants/string';

const Routers = () => {
	return (
		<Switch>
			<PrivateRoute path={PATH_HOME} component={Home} exact />
			<PrivateRoute path={`${PATH_FILM}/:trending`} component={TrendingFilm} exact />
			<PrivateRoute path={`${PATH_FILM_DETAIL}/:filmId`} component={FilmDetail} />
			<PrivateRoute path={`${PATH_CATEGORY}/:category_id`} component={Film} />
			<PrivateRoute path={PATH_PROFILE} component={Profile} exact />
			<PrivateRoute path={PATH_CHANGE_PASSWORD} component={ChangePassword} />
			<Route path={PATH_LOGIN} component={Login} exact />
			<Route path={PATH_REGISTER} component={Register} exact />
		</Switch>
	);
};

export default Routers;

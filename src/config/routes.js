// import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import PageLoader from '../components/PageLoader/PageLoader';

const PageLoadable = (opts) => {
    return Loadable(
        Object.assign(
            {
                loading: PageLoader
            },
            opts
        )
    );
};

const AsyncHome = PageLoadable({
    loader: () => import("../containers/Home/HomeContainer")
});
const AsyncCountries = PageLoadable({
    loader: () => import('../containers/Countries/CountriesContainer')
});
const AsyncCountry = PageLoadable({
    loader: () => import('../containers/Country/CountryContainer')
});

export default function getRoutes() {
    return (
        <Switch>
            <Route path='/' exact={true} component={AsyncHome} />
            <Route path='/countries' exact={true} component={AsyncCountries} />
            <Route path='/countries/:code' component={AsyncCountry} />
        </Switch>
    )
}
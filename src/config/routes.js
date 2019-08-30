// import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import PageLoader from "components/PageLoader/PageLoader";

const PageLoadable = (opts) => {
    return Loadable(
        Object.assign(
            {
                loading: PageLoader
            },
            opts
        )
    );
}

const AsyncHome = PageLoadable({
    loader: () => import("containers/Home/HomeContainer")
});

export default function getRoutes() {
    return (
        <Switch>
            <Route path='/' component={AsyncHome} />
        </Switch>
    )
}
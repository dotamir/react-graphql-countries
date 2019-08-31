import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { ScrollContainer } from 'react-router-scroll-4';
import AppLoadingContainer from './../AppLoading/AppLoadingContainer';
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import getRoutes from '../../config/routes';
import Header from '../../components/Header/Header';

const AppContainer = (props) => {
    const { location } = props;

    return (
        <div className='outer-container'>
            <ScrollContainer scrollKey='page-wrap'>
                <div className='page-wrap'>
                    <Header />
                    <ErrorBoundary location={location}>
                        <AppLoadingContainer location={location}>
                            {getRoutes()}
                        </AppLoadingContainer>
                    </ErrorBoundary>
                </div>
            </ScrollContainer>
        </div>
    )
};

AppContainer.propTypes = {
    location: PropTypes.object.isRequired
}

export default withRouter(AppContainer);
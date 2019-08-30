import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { prepareApp } from '../../redux/modules/app';

const AppLoadingContainer = (props) => {
    const { appIsReady, children, dispatch } = props;

    useEffect(() => {
        // In order to show how is working this component, I put a dummy timeout to make app ready.
        if (!appIsReady) {
            setTimeout(() => {
                dispatch(prepareApp());
            }, 1000);
        }
    });

    if (appIsReady) {
        return children;
    }

    return (
        <main>
            <div className='loading-container text-center'>
                <Spinner />
            </div>
        </main>
    )
};

AppLoadingContainer.propTypes = {
    appIsReady: PropTypes.bool.isRequired
}

const mapStateToProps = ({ app }) => ({
    appIsReady: app.appIsReady,
});

export default connect(mapStateToProps)(AppLoadingContainer);

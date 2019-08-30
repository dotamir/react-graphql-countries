import PropTypes from "prop-types";
import React from "react";
import hoistNonReactStatic from "hoist-non-react-statics";
import Spinner from "../Spinner/Spinner";

const withLoading = comp => {
    const LoadingComponent = props => {
        const { isLoading } = props;

        if (isLoading) {
            return (
                <main>
                    <div className="loading-container text-center">
                        <Spinner />
                    </div>
                </main>
            );
        }

        return <comp {...props} />;
    }

    LoadingComponent.propTypes = {
        isLoading: PropTypes.bool.isRequired
    };

    LoadingComponent.displayName = `withLoading(${comp.displayName ||
        comp.name})`;

    return hoistNonReactStatic(LoadingComponent, comp);
};

export default withLoading;

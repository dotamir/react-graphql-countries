import PropTypes from "prop-types";
import React from "react";
import hoistNonReactStatic from "hoist-non-react-statics";
import Spinner from "../Spinner/Spinner";

const withLoading = (Comp) => {
    const LoadingComponent = (props) => {
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

        return <Comp {...props} />;
    }

    LoadingComponent.propTypes = {
        isLoading: PropTypes.bool.isRequired
    };

    LoadingComponent.displayName = `withLoading(${Comp.displayName ||
        Comp.name})`;

    return hoistNonReactStatic(LoadingComponent, Comp);
};

export default withLoading;
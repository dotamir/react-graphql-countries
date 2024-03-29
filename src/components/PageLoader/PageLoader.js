import PropTypes from "prop-types";
import React from "react";
import Spinner from "../Spinner/Spinner";

export default function PageLoader(props) {
    const { isLoading, error, pastDelay, timedOut } = props;

    if (isLoading) {
        if (timedOut) {
            return (
                <main>
                    <p className="text-center">
                        Sorry! There seems to be some issue. Please try
                        reloading the page.
                    </p>
                </main>
            );
        }

        if (pastDelay) {
            return (
                <main>
                    <div className="loading-container text-center">
                        <Spinner />
                    </div>
                </main>
            );
        }

        return <main />;
    }

    if (error) {
        console.error(error);

        return (
            <main>
                <p className="text-center">
                    Sorry, there was a problem loading the page.
                </p>
            </main>
        );
    }

    return <main />;
}

PageLoader.propTypes = {
    isLoading: PropTypes.bool,
    timedOut: PropTypes.bool,
    pastDelay: PropTypes.bool,
    error: PropTypes.bool
};

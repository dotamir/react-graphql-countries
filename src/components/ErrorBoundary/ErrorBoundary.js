import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Container } from "reactstrap";

export default class ErrorBoundary extends Component {
    static propTypes = {
        children: PropTypes.any.isRequired,
        location: PropTypes.objectOf.isRequired
    };

    state = {
        hasError: false
    };

    componentDidUpdate(prevProps) {
        const { location } = this.props;
        if (location && prevProps.location !== location) {
            this.setState({
                hasError: false
            });
        }
    }

    componentDidCatch(error, info) {
        console.error(error);
        console.info(info);

        this.setState({
            hasError: true
        });
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            return (
                <main className="error-page">
                    <Container>
                        <h2>Oops! An Error Occurred!</h2>

                        <p>
                            Please try reloading the page or you can go to the{" "}
                            <Link to="/">homepage</Link>.
                        </p>
                    </Container>
                </main>
            );
        }

        return children;
    }
}

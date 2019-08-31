import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import Spinner from '../../components/Spinner/Spinner';
import Country from './Country';
import gql from 'graphql-tag';

const GET_COUNTRY_DETAILS = gql`
    query($code: String) {
        country(code: $code) {
            name
            emoji
            phone
            currency
            continent {
                name
            }
        }
    }
`;

const CountryContainer = props => {
    const { 
        match: { params: code }
    } = props;

    const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS, {
        variables: code
    });

    if (loading) {
        return (
            <>
                <div className='loading-container text-center'>
                    <Spinner />
                    <p>Fetching country details...</p>
                </div>
            </>
        )
    }

    if (error) return <p>Error :(</p>

    return (
        <Country country={data.country} />
    )
};

CountryContainer.propTypes = {
    match: PropTypes.object
};

export default CountryContainer;
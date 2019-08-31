import React from 'react';
// import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Spinner from '../../components/Spinner/Spinner';
import Countries from './Countries';

const CountriesContainer = _props => {
    const { loading, error, data } = useQuery(gql`
        {
            countries {
                name
                code
                emoji
                native
                continent {
                name
                }
            }
        }
    `);

    if (loading) {
        return (
            <>
                <div className='loading-container text-center'>
                    <Spinner />
                    <p>Fetching countries...</p>
                </div>
            </>
        )
    };

    if (error) return <p>Error :(</p>;
    
    return (
        <Countries countries={data.countries} />
    )
};

export default CountriesContainer;
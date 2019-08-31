import React from 'react';
import PropTypes from 'prop-types';
import Table from 'reactstrap/lib/Table';
import Container from 'reactstrap/lib/Container';
import { Link } from 'react-router-dom';

const Countries = (props) => {
    const { countries } = props;

    return (
        <>
            <Container fluid={true}>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Native</th>
                            <th>Code</th>
                            <th>Continent</th>
                            <th>Flag</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map(({ name, native, code, continent, emoji }) => (
                            <tr>
                                <td>{name}</td>
                                <td>{native}</td>
                                <td>{code}</td>
                                <td>{continent.name}</td>
                                <td>{emoji}</td>
                                <td>
                                    <Link to={`/countries/${code}`}>Details</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
};

Countries.propTypes = {
    countries: PropTypes.array
};

export default Countries;

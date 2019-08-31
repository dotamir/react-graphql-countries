import React from 'react';
import PropTypes from 'prop-types';
import Table from 'reactstrap/lib/Table';
import Container from 'reactstrap/lib/Container';

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

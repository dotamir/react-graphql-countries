import React from 'react';
import PropTypes from 'prop-types';
import Container from 'reactstrap/lib/Container';
import StyledCountry, { CountryDetailsBox, CountryDetailBlock } from './StyledCountry';

const Country = props => {
    const { country: { name, emoji, phone, currency, continent } } = props;

    return (
        <Container>
            <StyledCountry>
                <h3>{name} {emoji}</h3>
                <CountryDetailsBox>
                    <CountryDetailBlock>
                        <span>Phone:</span>
                        <span>{phone}</span>
                    </CountryDetailBlock>
                    <CountryDetailBlock>
                        <span>Currency:</span>
                        <span>{currency}</span>
                    </CountryDetailBlock>
                    <CountryDetailBlock>
                        <span>Continent:</span>
                        <span>{continent.name}</span>
                    </CountryDetailBlock>
                </CountryDetailsBox>
            </StyledCountry>
        </Container>
    )
};

Country.propTypes = {
    country: PropTypes.object
}

export default Country;
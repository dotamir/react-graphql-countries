import styled from 'styled-components';

const StyledCountry = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2em;
`;

export const CountryDetailsBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: aliceblue;
    padding: 1em;
`;

export const CountryDetailBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 49%;
    background-color: white;
    padding: 1em;
    margin: .1em;
`;

export default StyledCountry;
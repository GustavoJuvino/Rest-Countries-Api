import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 0px 150px 0px 10%;
    height: auto;

    @media (max-width: 1020px) {
        display: block;
    }

    @media (max-width: 360px) {
        margin-left: 0px;
    }
`

export const CountriesSection = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-left: 10%;

    @media (max-width: 1600px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1250px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1020px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 360px) {
        margin-left: 0px;
    }

    & h1 {
        font-size: 16px;
    }

    & img {
        width: 292px;
        height: auto;
        border-radius: 5px;
        cursor: pointer;
    }

    & .CountriesDetails {
        margin-top: 50px;
        width: 292px;
    }
`
export const Country = styled.div`
    margin-top: 50px;
    width: 292px;
`

export const InfosCountry = styled.div `
    height: 150px;
    margin-top: -6px;
    padding: 20px 0px 0px 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 20px 0px rgba(7, 7, 7, 0.20);

    & h1 {
        padding-bottom: 10px;
    }

    & span, p{
    font-size: 14px;
    }

    & span {
    font-weight: 900;
    }
`
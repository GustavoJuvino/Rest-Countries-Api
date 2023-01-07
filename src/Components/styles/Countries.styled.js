import styled from "styled-components";


export const CountriesSection = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-left: 150px;

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

    & .CountriesTexts {
        height: 150px;
        margin-top: -6px;
        padding: 20px 0px 0px 20px;
        box-shadow: 0px 0px 10px 0px rgba(85, 85, 85, 0.200);
        border-radius: 5px;

        & h1 {
            padding-bottom: 10px;
        }

        & span, p{
            font-size: 14px;
        }

        & span {
            font-weight: 900;
        }

    }
`
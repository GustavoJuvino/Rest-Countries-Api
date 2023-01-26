import styled from "styled-components";

export const BackButton = styled.button`
    width: 120px;
    height: 40px;
    margin-left: 5%;
    margin-top: 50px;
    font-size: 14px;
    background-color: transparent;
    box-shadow: 0px 0px 10px 0px rgba(85, 85, 85, 0.200);
    border: none;
    border-radius: 5px;

    & .left-icon{
        margin-right: 15px;
    }
`

export const CountryContainer = styled.section`
    display: flex;
    margin-top: 50px;
    margin-left: 5%;

    @media (max-width: 1036px) {
        display: block;
    }

    & img {
        width: 550px;
        height: auto;

        @media (max-width: 1110px) {
            width: 45%;
        }

        @media (max-width: 680px) {
            width: 280px;
        }
    }
`

export const CountryInfos = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
    margin-left: 5%;

    @media (max-width: 1457px) {
        margin-top: 50px;
    }

    @media (max-width: 1036px) {
        margin-left: 0px;
    }


    & .infos-column-2{
        margin-top: 50px;
    }
`

export const InfosColumn = styled.div`
    width: 400px;

    & h1 {
        font-size: 28px;
        margin-bottom: 20px;
        word-break: break-word;
    }

    & p {
        font-weight:  700;
        margin-top: 10px;
    }

    & span {
        font-weight: 600;
    }
`
export const NavCountries = styled.nav`
    display: flex;

    @media (max-width: 1457px) {
        margin-top: 50px;
    }

    @media (max-width: 400px) {
        display: flex;
        flex-wrap: wrap;
        & button {
            margin-top: 20px;
            margin-left: 0px;
        }
    }

    & p {
        font-weight: 700;
    }

    & div {
        margin-left: 20px;
    }

    & button {
        cursor: pointer;
        box-shadow: 0px 0px 10px 0px rgba(85, 85, 85, 0.200);
        border: none;
        width: 120px;
        height: 28px;
        margin-left: 20px;
    }
`
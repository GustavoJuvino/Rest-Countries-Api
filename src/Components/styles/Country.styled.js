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

    @media (max-width: 800px) {
        margin-top: 50px;
        display: block;
    }

    & img {
        width: clamp( 340px, 35%, 35%);
        height: max( 32%, 300px );
    }
`

export const CountryInfos = styled.section`
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    margin-left: 5%;

    @media (max-width: 1000px) {
        margin-top: 0px;
        display: block;
    }

    @media (max-width: 800px) {
        margin-top: 50px;
        margin-left: 0;
    }

    & .infos-column-2{
        margin-top: 50px;
        margin-left: 10%;

        @media (max-width: 1000px) {
            margin-left: 0;
        }
    }
`

export const InfosColumn = styled.div`
    width: 250px;

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
    margin-top: 50px;
    display: flex;

    @media (max-width: 732px) {
        display: block;
    }

    @media (max-width: 400px) {
        display: flex;
        flex-wrap: wrap;
        & button {
            margin-top: 20px;
        }
    }

    & p {
        font-weight: 700;
        @media (max-width: 1224px) {
            margin-top: 10px;
    }
    }

    & button {
        cursor: pointer;
        box-shadow: 0px 0px 10px 0px rgba(85, 85, 85, 0.200);
        border: none;
        width: 120px;
        height: 28px;
        margin-right: 20px;
        margin-left: 20px;

        @media (max-width: 1224px) {
            margin-top: 10px;
        }

        @media (max-width: 560px) {
            margin-left: 0px;
        }
    }
`
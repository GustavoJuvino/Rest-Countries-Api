import styled from "styled-components";

export const BackButton = styled.button`
    cursor: pointer;
    width: 120px;
    height: 40px;
    margin: 50px 0px 0px 5%;
    font-size: 14px;
    background-color: transparent;
    box-shadow: 0px 0px 20px 0px rgba(7, 7, 7, 0.30);
    border: none;
    border-radius: 5px;
    color: ${(props) => props.color};

    & .left-icon{
        margin-right: 15px;

        path{
            fill: ${(props) => props.color};
        }
    }
`

export const CountryContainer = styled.section`
    display: flex;
    margin: 50px 0px 0px 5%;

    @media (max-width: 834px) {
        margin-top: 50px;
        display: block;
    }

    & img {
        width: max( 300px, 35%);
        height: max( 32%, 300px );
    }
`

export const CountryInfos = styled.section`
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    margin: 50px 0px 0px 5%;

    @media (max-width: 834px) {
        margin-top: 50px;
        display: block;
    }

    @media (max-width: flex) {
        margin-top: 50px;
        margin-left: 0;
    }

    & .infos-column-2{
        width: 400px;
        margin-top: 50px;
        margin-left: 14%;

        @media (max-width: 1326px) {
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
        box-shadow: 0px 0px 20px 0px rgba(7, 7, 7, 0.30);
        border: none;
        width: 120px;
        height: 28px;
        margin-right: 20px;
        margin-left: 20px;
        background-color: transparent;
        color: ${(props) => props.color};

        @media (max-width: 1224px) {
            margin-top: 10px;
        }

        @media (max-width: 560px) {
            margin-left: 0px;
        }
    }
`
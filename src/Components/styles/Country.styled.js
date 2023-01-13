import styled from "styled-components";

export const BackButton = styled.button`
    width: 120px;
    height: 40px;
    margin-left: 100px;
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 50px;

    & img {
        width: 550px;
        height: 420px;
        margin-left: 100px;
    }

    /* & h1 {
        margin-top: 40px;
        margin-left: 38px;
        font-size: 28px;
    } */

    & h1 {
        font-size: 28px;
    }
`
export const CountryTexts = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 0.4fr);

    & ul {
        margin-top: 20px;

        & li {
            margin-top: 10px;
            font-size: 16px;
        }

        & p {
            font-weight: 700;
        }

        & span {
         font-weight: 400;
        }
    }

    & .ul-list-2{
        margin-top: 58px;
    }

    & nav {
        margin-left: 50px;
        
        & p {
            font-weight: 700;
        }

        & .country-link {
            margin-left: 10px;
        }      
    }
`

export const InfosList2 = styled.ul`
    margin-top: 60px;

    & li {
        margin-top: 10px;
    }

    & p {
        font-weight: 700;
    }

    & span {
         font-weight: 400;
    }
`
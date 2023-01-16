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
`
export const CountryTexts = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 350px);
    margin-left: 120px;

    & h1 {
        font-size: 32px;
        margin-bottom: 30px;
    }

    & ul {
        margin-top: 50px;

        & li {
            margin-top: 10px;
            font-size: 16px;
        }

        & p {
            font-weight:  700;
        }

        & span {
         font-weight: 600;
        }
    }

    & .ul-list-2{
        margin-top: 110px;
    }

    & nav {
        margin-left: 38px;
        display: flex;
        
        & p {
            font-weight: 700;
        }

        & .country-link {
            margin-left: 10px;
            padding: 0px;
        }      
    }
`

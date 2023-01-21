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
    grid-template-columns: 1fr 2fr;
    width: auto;
    margin-top: 50px;
    & img {
        width: 550px;
        height: 420px;
        margin-left: 100px;
    }
`

export const CountryInfos = styled.section`
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    margin-left: 150px;

    & nav {
        display: flex;

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
    }
`

export const CountryInfosColumn1 = styled.div`
    margin-top: 50px;

    & h1 {
        font-size: 32px;
        margin-bottom: 30px;
    }

        & p {
            font-weight:  700;
            margin-top: 10px;
            font-size: 16px;
        }

        & span {
            font-weight: 600;
        }
`

export const CountryInfosColumn2 = styled.section`
    margin-top: 110px;
    margin-left: 100px;
        & p {
            font-weight:  700;
            margin-top: 10px;
            font-size: 16px;
        }

        & span {
            font-weight: 600;
        }
`
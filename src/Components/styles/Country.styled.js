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
    grid-template-columns: auto 2fr 0.5fr;
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
    width: 80%;
    margin-top: 80px;
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

export const CountryInfosColumn2 = styled.section`
    /* margin-left: 100px; */
    margin-top: 50px;
        & p {
            font-weight:  700;
            margin-top: 10px;
            font-size: 16px;
        }

        & span {
            font-weight: 600;
        }
`
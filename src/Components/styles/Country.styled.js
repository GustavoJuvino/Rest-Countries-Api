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

export const CountrySection = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 0.2fr);
    grid-gap: 50px;
    margin-top: 50px;

    & img {
        width: 450px;
        height: 350px;
        margin-left: 100px;
    }
`
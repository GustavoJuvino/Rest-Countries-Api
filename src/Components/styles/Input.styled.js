import styled from "styled-components";


export const SearchDiv = styled.div`
    margin-top: 50px;
    width: 450px;
    height: 50px;
    box-shadow: 0px 0px 10px 0px rgba(85, 85, 85, 0.200);
    border-radius: 3px;

    & input {
        width: 80%;
        height: 25px;
        font-size: 14px;
        background-color: var(--very-light-gray);
        position: relative;
        border: none;
        margin: 14px 0px 0px 10px;
        color: black;
        outline: none !important;
    }

    & .SearchIcon {
        margin-left: 20px;
        padding-top: 4px;
    }

`
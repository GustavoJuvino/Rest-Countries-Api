import styled from "styled-components";

export const SearchDiv = styled.div`

    @media (max-width: 1020px) {
        margin-top: 0px;
    }

    margin-top: 50px;
    width: max( 300px, 30%);
    height: 50px;
    box-shadow: 0px 0px 10px 0px rgba(85, 85, 85, 0.200);
    border-radius: 5px;

    & input {
        border: none;
        width: 80%;
        height: 25px;
        font-size: 14px;
        position: relative;
        background-color: transparent;
        margin: 14px 0px 0px 10px;
        color: black;
        outline: none !important;
    }

    & .SearchIcon {
        margin-left: 20px;
        padding-top: 4px;
        stroke: white;
    }

`
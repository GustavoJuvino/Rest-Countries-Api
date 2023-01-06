import styled, { keyframes } from "styled-components";


// Effects
const dropingMenu = keyframes`
    from{
        opacity: 0;
        transform: translateY(-10px);
    }
    to{
        opacity: initial;
        transform: translateY(0px);
    }
`

export const  FilterContainer = styled.section`
    margin-top: 50px;
    height: auto;
    
    & p {
        display: flex;
        width: 220px;
        height: 50px;
        font-weight: 600;
        font-size: 14px;
        padding: 14px 0px 0px 20px;
        border-radius: 3px;
        box-shadow: 0px 0px 10px 0px rgba(85, 85, 85, 0.200);
      }

      & .arrow {
        display: inline-block;
        margin: 5px 0px 0px 55px;
        cursor: pointer;
        transform: rotate(180deg);
    }
    

    & ul{
        position: absolute;
        z-index: 2;
        background-color: white;
        width: 220px;
        height: 160px;
        margin-top: 10px;
        padding: 15px 0px 0px 25px;
        border-radius: 3px;
        box-shadow: 0px 0px 10px 0px rgba(85, 85, 85, 0.200);
        animation: ${dropingMenu} 0.3s forwards;

        & li {
            position: inherite;
            font-weight: 600;
            cursor: pointer;
            margin-bottom: 5px;
            width: 80px;
        }
    }

`

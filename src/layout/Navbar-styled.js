import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    max-width: 680px;
    display: flex;
    flex-direction: column;
    margin: auto;
`;
export const Header = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 1rem;
    margin: 5px 0;
`;
export const Main = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    margin: 10px 0;
    flex-direction: row;
    i 
    {
        width: 50px;
        height: 37px;
        border: none;
        background-color: #ffffff50;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        color: #fff;
    }
    input 
    {
        background-color: #ffffff50;
        border: none;
        width: 100%;
        outline: none;
        padding: 10px 30px;
        color: #fff;
        &::placeholder
        {
            color: #fff;
        }
    }
`;
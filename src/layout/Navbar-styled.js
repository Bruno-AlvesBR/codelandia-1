import styled from "styled-components";

export const Content = styled.section`
    nav 
    {
        min-height: 80px;
        width: 100%;
        background: linear-gradient(to right, #574AE8, #3EA1DB);
        padding: 10px;
        .container-navbar
        {
            width: 100%;
            max-width: 600px;
            display: flex;
            margin: auto;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
            gap: 20px;
            header 
            {
                width: 100%;
                display: flex;
                justify-content: space-between;
                color: #fff;
                font-size: 1rem;
                margin: 5px 0;
            }
            main 
            {
                width: 100%;
                height: auto;
                display: flex;
                margin: 10px 0;
                i 
                {
                    width: 37px;
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
            }
        }
    }
`;
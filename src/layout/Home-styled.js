import styled from "styled-components";

export const Content = styled.section`
    margin: 50px 0;
    .container-cards 
    { 
        display: flex;
        flex-wrap: wrap;
        height: auto;
        width: 100%;
        max-width: 700px;
        margin: auto;
        .card 
        {
            width: 100%;
            height: auto;
            padding: 10px;
            margin: 10px;
            background-color: #fff;
            header 
            {
                display: flex;
                justify-content: space-between;
                p 
                {
                    font-size: .7rem;
                }
                i 
                {
                    font-size: 1rem;
                    overflow: hidden;
                }
            }
            main 
            {
                margin: 10px 0;
                h1 
                {
                    margin: 10px 0;
                }
                p 
                {
                    font-size: .8rem;
                    line-height: 20px;
                }
            }
        }
    }
`;
import React from 'react';
import { 
    Nav,
    Header,
    Main
 } from '../layout/Navbar-styled';

export default function Navbar(props) 
{
    return (
        <Nav>
            <Header>
                <p>Codelândia</p>
                <p>Blog</p>
            </Header>
            <Main>
                <i className="bx bx-search-alt-2" />
                <input onChange={props.onChangeSearch} placeholder='Pesquisar no blog' type="text"  />
            </Main>
        </Nav>
    )
}

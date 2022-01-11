import React from 'react';
import { Content } from '../layout/Navbar-styled';

export default function Navbar() 
{
    return (
        <Content>
            <nav>
                <div className="container-navbar">
                    <header>
                        <p>Codelândia</p>
                        <p>Blog</p>
                    </header>
                    <main>
                        <i className="bx bx-search-alt-2" />
                        <input placeholder='Pesquisar no blog' type="text"  />
                    </main>
                </div>
            </nav>
        </Content>
    )
}

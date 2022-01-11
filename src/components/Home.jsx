import React from 'react'
import { Content } from '../layout/Home-styled';

export default function Home({ data, filterTitle }) 
{
    return (
        <Content>
            {filterTitle.length !== 0 ? (
                <div className="container-cards">
                    {filterTitle.map((item, key) =>{
                        return(
                            <div key={key} className="card">
                                <header>
                                    <p>{item.date}</p>
                                    <i className={item.src1} />
                                </header>
                                <main>
                                    <h1>{item.title}</h1>
                                    <p>{item.text}</p>
                                </main>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div className="container-cards">
                    {data.map((item, key) =>{
                        return(
                            <div key={key} className="card">
                                <header>
                                    <p>{item.date}</p>
                                    <i className={item.src1} />
                                </header>
                                <main>
                                    <h1>{item.title}</h1>
                                    <p>{item.text}</p>
                                </main>
                            </div>
                        )
                    })}
                </div>
            )}
        </Content>
    )
}
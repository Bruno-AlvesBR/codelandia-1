import React, { 
    useState 
} from 'react'
import { 
    ContentHome
} from '../layout/Home-styled';

export default function Home(props) 
{
    return (
        <ContentHome>
            {props.filterTitle.length !== 0 ? (
                props.filterTitle.map((item, key) =>{
                    return(
                        <div key={key} className="card">
                            <label className='header'>
                                <p>{item.date}</p>
                                <i className={item.src1} />
                            </label>
                            <label className='main'>
                                <h1>{item.title}</h1>
                                <p>{item.text}</p>
                            </label>
                        </div>
                    )
                })
            ) : (
                props.data.map((item, key) =>{
                    return(
                        <div key={key} className="card">
                            <label className='header'>
                                <p>{item.date}</p>
                                <i className={item.src1} />
                            </label>
                            <label className='main'>
                                <h1>{item.title}</h1>
                                <p>{item.text}</p>
                            </label>
                        </div>
                    )
                })
            )}
        </ContentHome>
    )
}
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import axios from 'axios';

export default function App() 
{
  const [data, setData] = useState([])
  useEffect(() =>
  {
    axios.get('https://bruno-alvesbr.github.io/codelandia-1/db.json')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])
  const [filteredTitle, setFilteredTitle] = useState([])
  const handleFilterTitle = e =>
  {
    const searchWord = e.target.value
    const newFilter = data.filter(value =>
      {
        return value.title.toLowerCase().includes(searchWord.toLowerCase())
      })
    setFilteredTitle(newFilter)
  }
  return (
    <Router>
      <header>
        <Navbar onChangeSearch={handleFilterTitle} />
      </header>

      <main>
        <Home filterTitle={filteredTitle} data={data} />
      </main>

      <header></header>
    </Router>
  )
}
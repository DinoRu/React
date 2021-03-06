import React from 'react'
import './home.scss';
import Navbar from '../composants/navbar/Navbar';
import Featured from '../composants/featured/Featured';
import List from '../composants/list/List';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home

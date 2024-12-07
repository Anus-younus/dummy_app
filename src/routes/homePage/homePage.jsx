import React from 'react'
import './homePage.scss'
import SearchBar from '../../components/searchBar/searchBar'

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className="textContainer">
        <div className="wrapper">
          <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi totam perspiciatis a, expedita fugiat iusto, veritatis ex voluptatem voluptate eveniet odit ea architecto quibusdam mollitia illum in fugit. Iste, saepe.</p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experince</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Granted</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage
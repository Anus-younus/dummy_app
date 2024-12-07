import React from 'react'
import './singlePage.scss'
import Slider from '../../components/slider/slider'
import { singlePageData, userData } from "../../lib/dummydata"
import Map from '../../components/map/map'

const SinglePage = () => {
  return (
    <div className='SinglePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePageData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePageData.title}</h1>
                <div className="address">
                  <img src="./pin.png" alt="" />
                  <span>{singlePageData.address}</span>
                </div>
                <div className="price">${singlePageData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePageData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utility</span>
                <p>Renter is responcesible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property fee</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>

          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Near by palces</p>
          <div className="listHorizantal">

            <div className='feature'>
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>Schoole</span>
                <p>250m away</p>
              </div>
            </div>
            <div className='feature'>
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className='feature'>
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>250m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePageData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
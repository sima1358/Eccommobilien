import React from 'react'
import "./saleHomeList.css"
import { saleHomeList } from '../../data/data'
import { Heading } from '../Heading/Heading';

export const SaleHomeList = () => {
  return (
    <section className="sale">
      <Heading title="The best sale properties" />
    <div className="saleCard">
      {saleHomeList.map((value, index) => {
        const {cover, name, location, m2, price, type } = value;
        return (
          <div className="sale-content" key={index}>
            <div>
              <img className="saleImg" src={cover} alt="" />
            </div>
            <div className='sale-card-property' >
                <h4>{name}</h4>
            <p>Location: {location}</p>
            <p>M2: {m2}</p>
            <p>Total price: {price} </p>
            <p>Type: {type} </p>
      
              <button className="sale-btn">Click here</button>

            </div>
        
          </div>
        );
      })}
    </div>
  </section>
  )
}

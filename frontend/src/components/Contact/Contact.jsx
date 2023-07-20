import React from 'react'
import { footer } from "../../data/data";


export const Contact = () => {
  return (
    <div>
        <div className="box" id="footer">
    {footer.map((val) => (
      <div>
        <ul className="footer">
          <h3 className="box">Contact Us</h3>

          {val.text.map((items) => (
            <li>{items.list} </li>
          ))}
        </ul>
      </div>
    ))}
  </div></div>
  )
}

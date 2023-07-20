import React, { useEffect, useState } from "react";
import { forRent } from "../../data/data";
import { useParams } from "react-router-dom";
import "../Home/Rent/rent.css";

export const DetailRent = () => {
  let { id } = useParams();
  const [rentalPlace, setRentalPlace] = useState(null);

  useEffect(() => {
    const itemRental = forRent.find((r) => r.id === +id);
    console.log(itemRental);
    setRentalPlace(itemRental);

    console.log("id", id);
  }, [id]);

  return (
    <div className="detail-rent-container">
      {rentalPlace && (
        <>
          <div>
            {Array.isArray(rentalPlace.fileNumber) ? (
              rentalPlace.fileNumber.map((fileNumber, index) => (
                <p key={index}>{fileNumber}</p>
              ))
            ) : (
              <p className="fileNumber-details">{rentalPlace.fileNumber}</p>
            )}
            ;
            {rentalPlace.image.map((image, index) => (
              <img
                src={`${image.img}`}
                key={index}
                alt=""
                className="image-detail-rent"
              ></img>
            ))}
            ;
            {Array.isArray(rentalPlace.description) ? (
              rentalPlace.description.map((description, index) => (
                <p key={index}>{description}</p>
              ))
            ) : (
              <h4 className="description-details">{rentalPlace.description}</h4>
            )}
            ;
          </div>
        </>
      )}
    </div>
  );
};

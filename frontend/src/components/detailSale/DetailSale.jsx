import React, { useEffect, useState } from "react";
import { forSale } from "../../data/data";
import { useParams } from "react-router-dom";
import "../Home/Sale/sale.css";

export const DetailSale = () => {
  let { id } = useParams();
  const [salePlace, setSalePlace] = useState(null);

  useEffect(() => {
    const itemSale = forSale.find((r) => r.id === +id);
    console.log(itemSale);
    setSalePlace(itemSale);

    console.log("id", id);
  }, [id]);

  return (
    <div className="detail-sale-container">
   
      {salePlace && (
        <>
          <div>
          {Array.isArray(salePlace.fileNumber) ? (
  salePlace.fileNumber.map((fileNumber, index) => (
    <p key={index}>{fileNumber}</p>
  ))
) : (
  <p className="fileNumber-details">{salePlace.fileNumber}</p>
)};
            {salePlace.image.map((image, index) => (
              <img
                src={`${image.img}`}
                key={index}
                alt=""
                className="image-detail-sale"
              ></img>
            ))};

{Array.isArray(salePlace.description) ? (
  salePlace.description.map((description, index) => (
    <p key={index}>{description}</p>
  ))
) : (
  <h4 className="description-details">{salePlace.description}</h4>
)};
          </div>
        </>
      )}
    </div>
  );
};

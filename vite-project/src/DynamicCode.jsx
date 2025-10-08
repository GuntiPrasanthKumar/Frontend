import React from "react";
import MyImg from "/MyImg.png";

const mylist = [
  {
    img: MyImg,
    price: 1200,
    brand: "NIKE",
  },
  {
    img: MyImg,
    price: 1200,
    brand: "PUMA",
  },
  {
    img: MyImg,
    price: 1200,
    brand: "RED TAPE",
  },
];

const DynamicCode = () => {
  return (
    <div className="parent">
      {mylist.map((ele, index) => (
        <div className="card" key={index}>
          <img src={ele.img} alt={ele.brand} />
          <p>Price: ₹{ele.price}</p>
          <p>Brand: {ele.brand}</p>
        </div>
      ))}
    </div>
  );
};

export default DynamicCode;
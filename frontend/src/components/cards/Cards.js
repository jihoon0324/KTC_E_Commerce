import React, { useEffect } from "react";
import "./Cards.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/api";

const Cards = (dress) => {
  const dispatch = useDispatch();

  console.log(dress.value);
  const products = useSelector((state) => ({ ...state.product }));
  console.log(products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    // <div className="card_panel">
    //   {products.map((item, index) => (
    //     <div className="photo_list">{item._id} </div>
    //   ))}
    // </div>

    <div className="card_panel">
      {/* {products.map((item, index) => (
        <> {item._id} </>
      ))} */}
    </div>
  );
};

export default Cards;

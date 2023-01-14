import React, { useEffect } from "react";
import "./Cards.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/api";

const Cards = (dress) => {
  const dispatch = useDispatch();

  console.log(dress.value);
  const products = useSelector((state) => ({ ...state.products }));

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="card_panel">
      <div className="photo_list">Image</div>
      <div className="photo_list">Image</div>
      <div className="photo_list">Image</div>
      <div className="photo_list">Image</div>
    </div>
  );
};

export default Cards;

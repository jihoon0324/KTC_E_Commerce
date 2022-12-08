import React from "react";

const OrderDetail = () => {
  return (
    <>
      <div className="pageTitle purchaseListTitle">purchases list</div>
      <div className="orderIDandDate">
        <span className="orderID">mongoDB ID here</span>
        <span className="orderDate">order date here</span>
      </div>
      <div className="shippingInfo">
        <div className="shippingTitle">shipping</div>
        <div className="shippingName">KTC SHOP</div>
        <div className="shippingAddress">KTC address : #400, 72 center </div>
      </div>
      <div className="billingInfo">
        <div className="billingTitle">billing</div>
        <div className="billingName"></div>
      </div>
    </>
  );
};

export default OrderDetail;

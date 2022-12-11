import React from "react";
import OrderList from "./OrderList";
import OrderDetail from "./OrderDetail";
import "./orderhistory.css";

const OrderHistory = () => {
  return (
    <>
      <div className=" orderHistoryWrap">
        <div className="pageTitle historyTitle">order history</div>
        <hr className="titleLine" />
        {/* after creating redux store, do uncommented  */}
        {/* {orders.map((order) => (
          <OrderList key={order._id} order={order} />
        ))} */}
      </div>
      <table className="orderLists">
        <tbody className="orderList">
          <tr>
            <td className="orderDate">Nov 22.2022</td>
            <td className="orderNumber">22222</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button className="viewOrderDetail">Veiw Order</button>
            </td>
          </tr>
        </tbody>
      </table>
      <OrderDetail />
    </>
  );
};

export default OrderHistory;

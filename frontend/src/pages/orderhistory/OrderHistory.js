import React from "react";
// import OrderList from "./OrderList";
import OrderDetail from "./OrderDetail";
import "./orderhistory.css";

const temData = [
  {
    id: 12341234,
    address: "123 street",
    date: 20221001,
    totalPrice: 100,
    user_Id: 4545,
    orderItems: [
      {
        name: "aa",
        qty: 1,
        image: "aaa",
        price: 100,
      },
    ],
  },
  {
    id: 22222222,
    address: "222 street",
    date: 20221002,
    totalPrice: 200,
    user_Id: 2222,
    orderItems: [
      {
        name: "ss",
        qty: 2,
        image: "sss",
        price: 200,
      },
    ],
  },
];

const OrderHistory = () => {
  const openModal = ({ order }) => {
    console.log({ order });
  };

  return (
    <>
      <div className=" orderHistoryWrap">
        <div className="pageTitle historyTitle">order history</div>
        <hr className="titleLine" />

        {temData.map((order) => (
          <table className="orderLists" key={order.id}>
            <tbody className="orderList">
              <tr>
                <td className="orderDate">{order.date}</td>
                <td className="orderNumber">{order.id}</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button
                    className="viewOrderDetail"
                    onClick={() => openModal({ order })}
                  >
                    Veiw Order
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
        <OrderDetail />
      </div>
    </>
  );
};

export default OrderHistory;

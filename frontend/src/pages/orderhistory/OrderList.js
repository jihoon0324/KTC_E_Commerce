import React from "react";

const OrderList = ({ order }) => {
  return (
    <>
      <table className="orderLists">
        <tbody className="orderList">
          <tr>
            <td className="orderDate">{order.date}</td>
            <td className="orderNumber">{order.id}</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button className="viewOrderDetail">Veiw Order</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default OrderList;

import React from "react";

const OrderList = () => {
  return (
    <>
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
    </>
  );
};

export default OrderList;

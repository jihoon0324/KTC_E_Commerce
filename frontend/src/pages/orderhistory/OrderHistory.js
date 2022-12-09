import React from 'react';
import OrderDetail from './OrderDetail';
import './orderhistory.css';

const OrderHistory = () => {
  return (
    <>
      <div className='pageTitle historyTitle'>order history</div>
      <hr className='titleLine' />
      <table className='orderLists'>
        <tbody className='orderList'>
          <tr>
            <td className='orderDate'>Nov 22.2022</td>
            <td className='orderNumber'>22222</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button className='viewOrderDetail'>Veiw Order</button>
            </td>
          </tr>
        </tbody>
      </table>

      <OrderDetail />
    </>
  );
};

export default OrderHistory;

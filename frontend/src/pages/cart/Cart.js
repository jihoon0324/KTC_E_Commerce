import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import "./Cart.css";
const Cart = () => {
  return (
    <>
      <Helmet>
        <title> Cart</title>
      </Helmet>
      <section>
        <Container>
          <Row>
            <div className="nav_Cover"></div>
          </Row>
          <Row>
            <Col>
              <h1 className="text-center fw-bold"> SHOPPING BAG</h1>
              <table>
                <thead>
                  <tr>
                    <th colSpan="3">Price</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td style={{ height: "150px", width: "200px" }}>
                      <div>photo</div>
                    </td>

                    <td>
                      <span>Product Name</span>
                      <br></br>
                      <span>SIZE</span>
                      <br />
                      <span>Quantity</span>
                    </td>
                    <td
                      className="text-end"
                      style={{ height: "150px", width: "200px" }}
                    >
                      $150
                    </td>
                  </tr>
                  <tr>
                    <td style={{ height: "150px", width: "200px" }}>
                      <div>photo</div>
                    </td>

                    <td style={{ height: "150px", width: "400px" }}>
                      <span>Product Name</span>
                      <br></br>
                      <span>SIZE</span>
                      <br />
                      <span>Quantity</span>
                    </td>
                    <td className="text-end ">$150</td>
                  </tr>
                  <tr>
                    <td style={{ height: "150px", width: "200px" }}>
                      <div>photo</div>
                    </td>

                    <td style={{ height: "150px", width: "400px" }}>
                      <span>Product Name</span>
                      <br></br>
                      <span>SIZE</span>
                      <br />
                      <span>Quantity</span>
                    </td>
                    <td className="text-end ">$150</td>
                  </tr>
                  <tr>
                    <td style={{ height: "150px", width: "200px" }}>
                      <div>photo</div>
                    </td>

                    <td style={{ height: "150px", width: "400px" }}>
                      <span>Product Name</span>
                      <br></br>
                      <span>SIZE</span>
                      <br />
                      <span>Quantity</span>
                    </td>
                    <td className="text-end ">$150</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3" className="fw-bold fs-1">
                      <span>Subtotal</span>
                      <span>$300</span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <button className="fw-bold fs-1">Checkout</button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cart;

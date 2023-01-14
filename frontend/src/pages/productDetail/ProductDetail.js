import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { productActions } from "../../redux/product/productSlice";
import axios from "axios";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [imgIndex, setimgIndex] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products//${id}`
        );
        setProduct(res.data);
        dispatch(productActions.getDetailProduct(res.data));
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [id, dispatch]);

  const controlNavbar = () => {
    if (window.scrollY > 700) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }

    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      setScrollActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div
      className={"productDetailContainer" + (product?.best ? "" : " notBest")}
    >
      {product?.best && <div className="best">Best</div>}
      <Row>
        <Col lg="4" className="productImgContainer">
          <div className="bigImg">
            <img src={product?.photoUrls[imgIndex]} alt="Product Detail" />
          </div>
          <Row className="smallImgContainer">
            {product ? (
              product.photoUrls.map((url, index) => (
                <Col lg key={index}>
                  <div className="smallImg" onClick={() => setimgIndex(index)}>
                    <img src={url} alt="Product Details" />
                  </div>
                </Col>
              ))
            ) : (
              <></>
            )}
          </Row>
        </Col>
        <Col lg="8">
          <div className="productDetailTitle">
            <div className="productName">{product?.productName}</div>
            <div className="productTitleLine">&#95;&#95;&#95;</div>
            <div className="productContent">{product?.content}</div>
            <div className="productTag">{product?.tag}</div>
            <Button className="productDetailCartBtn">Cart</Button>
          </div>
        </Col>
      </Row>
      <p className="productDetail">Product Detail</p>
      {product ? (
        product.photoUrls.map((url, index) => (
          <div key={index} className="detailImg">
            <img src={url} alt="Product Details" />
          </div>
        ))
      ) : (
        <></>
      )}
      <div
        className={
          "buyBtn" + (scrollActive ? " activeBuyBtn" : " nonActiveBuyBtn")
        }
      >
        <div>{product?.productName}</div>
        <div>BUY</div>
      </div>
    </div>
  );
};

export default ProductDetail;

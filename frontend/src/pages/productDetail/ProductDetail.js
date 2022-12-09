import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productActions } from '../../utils/product/productSlice';
import axios from "axios";
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  
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

console.log(product);

  return (
    <div className='productDetailContainer'>
      <Row>
        <Col md="4" className='imageContainer'>
          <div>
            <img src={product?.photoUrls[0]} alt='Detail 1'/>
          </div>
          <Row>
            <Col>
            <img src={product?.photoUrls[0]} alt='Detail 1'/>
            </Col>
            <Col>
            <img src={product?.photoUrls[1]} alt='Detail 2'/>
            </Col>
            <Col>
            <img src={product?.photoUrls[2]} alt='Detail 3'/>
            </Col>
          </Row>
        </Col>
        <Col md="8">
          
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;

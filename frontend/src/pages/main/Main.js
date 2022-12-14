import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Main.css';
import imageFirst from '../../src_assets/main-1.jpg';
import imageSecond from '../../src_assets/main-4.jpg';
import imageThird from '../../src_assets/main-2.jpg';

const Main = () => {
  return (
    <>
      <main className='mainPage'>
        <Carousel>
          <Carousel.Item>
            <img className='d-block' src={imageFirst} alt='First slide' />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block' src={imageSecond} alt='Second slide' />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block' src={imageThird} alt='Third slide' />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className='show_Cover'>
          <div className='show_Name'>Show All Products</div>
        </div>
      </main>
    </>
  );
};

export default Main;

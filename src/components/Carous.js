import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carous.css'

function Carous(props) {
    return (
        <div>
            

    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 image"
      src="https://www.arabianbusiness.com/cloud/2021/11/14/77W106Kc-Carrefour-7.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 image"
      src="https://www.itp.net/cloud/2021/08/19/kMrsFS3D-ITP-July27-MajidAlFuttam-2.jpeg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 image"
      src="https://scoopempire.com/wp-content/uploads/2019/01/majid-mall-dubai1.png"
      alt="Third slide"
    />


  </Carousel.Item>
</Carousel>



        </div>
    );
}

export default Carous;
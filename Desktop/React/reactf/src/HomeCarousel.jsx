import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./HomeCarousel.css";
const HomeCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="home"
            src="https://th.bing.com/th/id/OIP.0Wzctq0xntTvpxcCkfQe1gHaE8?w=292&h=193&c=7&r=0&o=5&pid=1.7"
            alt=""
          ></img>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="home"
            src="https://th.bing.com/th/id/OADD2.7971484995389_16I9NVPDQXIPR6FLMS?w=343&h=180&c=9&rs=1&pid=21.2"
            alt=""
          ></img>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="home"
            src="https://www.bing.com/th/id/OGC.cab8e70e8fc417578df44383e33461b7?pid=1.7&rurl=https%3a%2f%2fmedia0.giphy.com%2fmedia%2fwFd46e5l2geoNrtlLF%2fgiphy.gif%3fcid%3d790b7611e92c9a244479f53258685aa66c13727a31578bde%26rid%3dgiphy.gif%26ct%3dg&ehk=nY0QGshc83CxdEFijeOmRWMOUksA%2f1cQxedtxkMiw5k%3d"
            alt=""
          ></img>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;

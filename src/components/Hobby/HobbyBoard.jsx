import React from 'react';
import './HobbyBoard.css'
import Carousel from 'react-bootstrap/Carousel';

const HobbyBoard = () => {
    return (
    <div className='hobby'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/ff/36/9c/ff369c3054cdd8250289529f69fc1990.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Anime</h3>
          <p>Is hand-drawn and computer-generated animation originating from Japan. Outside of Japan and in English, anime refers specifically to animation produced in Japan</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.artfile.ru/1920x1200_828756_[www.ArtFile.ru].jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Snowboarding</h3>
          <p>Snowboarding is a recreational and competitive activity that involves descending a snow-covered surface while standing on a snowboard that is almost always attached to a rider's feet.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.artfile.ru/1920x1200_933011_[www.ArtFile.ru].jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Сycling</h3>
          <p>
          Cycling, also, when on a two-wheeled bicycle, called bicycling or biking, is the use of cycles for transport, recreation, exercise or sport.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default HobbyBoard;
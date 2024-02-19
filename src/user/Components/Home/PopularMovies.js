import React, { useRef } from 'react';
import Titles from '../Titles';
import { BsCollectionFill } from 'react-icons/bs';
import Slider from 'react-slick';  // Import Slider from react-slick
import Movie from '../Movie';
import { Movies } from '../../Data/MovieData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../index.css';

const PopularMovies = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className='my-16 mx-8'>
      <Titles title="Popular Movies" Icon={BsCollectionFill} />
      <br />
      <div className="slider-container">
        <Slider {...sliderSettings} ref={sliderRef}>
          {Movies.slice(0, 8).map((movie, index) => (
            <div key={index} className="slider-item">
              <Movie movie={movie} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularMovies;

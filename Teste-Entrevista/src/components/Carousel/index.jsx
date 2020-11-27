import React from 'react';

import './styles.css';

export default function Carousel({ images, submitedName }) {
  if (!images) {
    return <></>;
  }
  return (
    <div
      id='carousel-slider'
      className={`carousel slide ${
        submitedName ? 'carousel-fix-position' : 'carousel-position'
      }`}
      data-ride='carousel'
    >
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <div className='row'>
            <div className='col'>
              <img
                src={images[0].download_url}
                className='img-fluid d-block'
                alt=''
              />
            </div>
            <div className='col'>
              <img
                src={images[1].download_url}
                className='img-fluid d-block'
                alt=''
              />
            </div>
          </div>
        </div>
        {images &&
          images.map((item, index) => {
            if (index === 0 || index === 1 || index === images.length - 1) {
              return null;
            }
            return (
              <div className='carousel-item' key={index}>
                <div className='row'>
                  <div className='col'>
                    <img
                      src={images[index].download_url}
                      className='img-fluid d-block '
                      alt=''
                    />
                  </div>
                  <div className='col'>
                    <img
                      src={images[index + 1].download_url}
                      className='img-fluid d-block '
                      alt=''
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <a
        href='#carousel-slider'
        className='carousel-control-prev'
        role='button'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon'></span>
        <span className='sr-only'>Anterior</span>
      </a>

      <a
        href='#carousel-slider'
        className='carousel-control-next'
        role='button'
        data-slide='next'
      >
        <span className='carousel-control-next-icon'></span>
        <span className='sr-only'>Avançar</span>
      </a>
    </div>
  );
}

import React from 'react'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './ImageSlider.css'

let photosArr = [
  {
    id: 0,
    url: "https://i.picsum.photos/id/1050/536/354.jpg?hmac=fjxUSeQRIROZvo_be9xEf-vMhMutXf2F5yw-WaWyaWA",
    alt: "Outside Pho Gia in Milwakie Oregon",
  },
  {
    id: 1,
    url: "https://i.picsum.photos/id/455/536/354.jpg?hmac=gP9QyslkANh4zAqwZp266bO6rZZ3RqebTj9_STRKu6M",
    alt: "Inside Pho Gia in Milwakie Oregon",
  },
  {
    id: 2,
    url: "https://i.picsum.photos/id/455/536/354.jpg?hmac=gP9QyslkANh4zAqwZp266bO6rZZ3RqebTj9_STRKu6M",
    alt: "Best Pho and Vietnames food in Milwakie Oregon",
  },
];

const ImageSlider = props => {
    return (
      <div className="slide-container">
        <Slide duration={6000} easing={"ease"}>
          <div className="eachSlide">
            <div
              className="slideDiv"
              style={{ backgroundImage: `url(${photosArr[0].url})`}}>
              <div className="imgTextDiv">
                <div className="center">
                  <p>Pho Tai</p>
                </div>
              </div>
            </div>
          </div>
          <div className="eachSlide">
            <div
              className="slideDiv"
              style={{ backgroundImage: `url(${photosArr[1].url})`}}>
              <div className="imgTextDiv">
                <h2>Bo Kho</h2>
              </div>
            </div>
          </div>
          <div className="eachSlide">
            <div
              className="slideDiv"
              style={{ backgroundImage: `url(${photosArr[2].url})`}}
            >
              <div className="imgTextDiv">
                <h2>Bun Thit Nuong</h2>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    );
}

export default ImageSlider
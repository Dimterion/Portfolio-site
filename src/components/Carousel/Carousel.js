import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { images } from "../../data/images";
import "./carousel.css";

function Carousel() {
  const selectedRef = useRef(null);
  const [index, setIndex] = useState(0);

  const imagesList = [];
  for (let i = 0; i < images.length; i++) {
    imagesList.push({
      id: i,
      src: images[i].src,
      alt: images[i].alt,
    });
  }

  return (
    <>
      <div className="carousel-img">
        <ul>
          {imagesList.map((imageListItem, i) => (
            <li key={imageListItem.id} ref={index === i ? selectedRef : null}>
              <img src={imageListItem.src} alt={imageListItem.alt} />
            </li>
          ))}
        </ul>
      </div>
      <button
        className="carousel-btn"
        onClick={() => {
          flushSync(() => {
            if (index < imagesList.length - 1) {
              setIndex(index + 1);
            } else {
              setIndex(0);
            }
          });
          selectedRef.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }}
      >
        Cycle through the images
      </button>
    </>
  );
}

export default Carousel;

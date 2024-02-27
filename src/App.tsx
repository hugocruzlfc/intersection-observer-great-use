import React from "react";
import { LazyImage } from "./components";

function App() {
  const images = [
    { id: 1, src: "/imgs/image1.jpg", alt: "Description 1" },
    { id: 2, src: "/imgs/image2.jpg", alt: "Description 2" },
    { id: 3, src: "/imgs/image3.jpg", alt: "Description 3" },
    { id: 4, src: "/imgs/image4.jpg", alt: "Description 4" },
    { id: 5, src: "/imgs/image5.jpg", alt: "Description 5" },
    { id: 6, src: "/imgs/image6.jpg", alt: "Description 6" },
    { id: 7, src: "/imgs/image7.jpg", alt: "Description 7" },
    { id: 8, src: "/imgs/image8.jpg", alt: "Description 8" },
  ];
  return (
    <main>
      <section>
        {images.map((image) => (
          <LazyImage
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="lazy-image"
          />
        ))}
      </section>
    </main>
  );
}

export default App;

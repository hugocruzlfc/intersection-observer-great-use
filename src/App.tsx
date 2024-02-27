import React, { useCallback, useEffect, useState } from "react";
import { LazyImage, InfiniteScroll } from "./components";

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

const initialItems = [
  { id: 1, content: "Item 1" },
  { id: 2, content: "Item 2" },
  { id: 3, content: "Item 3" },
];

function App() {
  const [items, setItems] = useState(initialItems);

  const fetchMoreData = (count: number): Promise<typeof initialItems> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newData = Array.from({ length: 3 }, (_, i) => {
          const id = count + i + 1;
          return {
            id,
            content: `Item ${id}`,
          };
        });
        resolve(newData);
      }, 1000); // Adjust the delay as needed
    });
  };

  const loadMore = useCallback(async () => {
    // Simulate fetching more data from an API
    const newData = await fetchMoreData(items.length);
    setItems((prev) => [...prev, ...newData]);
  }, [items.length]);

  // console.log(items);

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
      <section>
        {items.map((item) => (
          <div
            key={item.id}
            className="list-item"
          >
            {item.content}
          </div>
        ))}
        <InfiniteScroll loadMore={loadMore} />
      </section>
    </main>
  );
}

export default App;

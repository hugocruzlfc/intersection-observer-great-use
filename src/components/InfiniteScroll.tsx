import React, { useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export interface InfiniteScrollProps {
  loadMore: () => void;
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ loadMore }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView, loadMore]);

  return (
    <div
      ref={ref}
      style={{ height: "10px" }}
    />
  );
};

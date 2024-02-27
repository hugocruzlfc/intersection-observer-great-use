import React, { useEffect } from "react";

export interface IntersectionAnimationTriggerProps {
  children: React.ReactNode;
  onInView: () => void;
}

export const IntersectionAnimationTrigger: React.FC<
  IntersectionAnimationTriggerProps
> = ({ children, onInView }) => {
  const handleIntersection = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        onInView();
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    // Start observing the target element
    observer.observe(document.getElementById("animated-element")!);

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, [onInView]);

  return <div id="animated-element">{children}</div>;
};

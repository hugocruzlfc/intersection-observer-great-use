import React, { useState } from "react";
import { IntersectionAnimationTrigger } from "./IntersectionAnimationTrigger";

export const AnimatedElement: React.FC = () => {
  const [animated, setAnimated] = useState(false);

  const handleInView = () => {
    setAnimated(true);
  };

  return (
    <IntersectionAnimationTrigger onInView={handleInView}>
      <div className={`animated-element ${animated ? "animate" : ""}`}>
        {/* Your animated content goes here */}
        This element will animate as it comes into view.
      </div>
    </IntersectionAnimationTrigger>
  );
};

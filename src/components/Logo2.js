import React, { useEffect, createRef } from "react";
import lottie from "lottie-web";
import animation1 from "../animations/data2.json";

const Logo = () => {
  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animation1,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);

  return (
    <div className="Lottie">
      <div className="animation-container" ref={animationContainer} />
    </div>
  );
};

export default Logo;

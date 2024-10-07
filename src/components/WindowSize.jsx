import { useState, useEffect } from "react";

function resizeWindow() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = (e) => {
    setSize({ width: e.innerWidth, height: e.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      Ширина: {size.width}, Высота: {size.height}
    </div>
  );
}

export default resizeWindow;

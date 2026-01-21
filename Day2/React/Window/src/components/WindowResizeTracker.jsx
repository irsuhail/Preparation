import { useEffect, useState } from "react";

const WindowResizeTracker = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Handler to update state on window resize
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Run once on mount

  // Determine device type
  const deviceType =
    size.width < 768
      ? "Mobile"
      : size.width <= 1024
      ? "Tablet"
      : "Desktop";

  return (
    <div>
      <h2>Window Resize Tracker</h2>
      <p>
        Width: {size.width} px, Height: {size.height} px
      </p>
      <h3>Device: {deviceType}</h3>
    </div>
  );
};

export default WindowResizeTracker;

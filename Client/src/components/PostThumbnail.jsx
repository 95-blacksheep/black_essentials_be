import React, { useRef, useState } from "react";

const PostThumbnail = ({ thumbnail, title }) => {
  const containerRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // Cursor X relative to the container
    const y = e.clientY - rect.top;  // Cursor Y relative to the container

    setCursorPosition({ x, y, visible: true });
  };

  const handleMouseLeave = () => {
    setCursorPosition({ x: 0, y: 0, visible: false });
  };

  return (
    <div
      className="post_thumbnail"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={thumbnail} alt={title} />
      {cursorPosition.visible && (
        <div
          className="desaturation-effect"
          style={{
            left: `${cursorPosition.x - 75}px`, // Offset to center the effect
            top: `${cursorPosition.y - 75}px`,
          }}
        ></div>
      )}
    </div>
  );
};

export default PostThumbnail;

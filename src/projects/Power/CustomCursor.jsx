import React, { useEffect, useState } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const area = document.querySelector(".p-page");

    if (!area) return;

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    if (!finePointer.matches) return;

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setIsVisible(true);

      const target = e.target;

      const interactive =
        target instanceof Element
          ? target.closest(
              "button, a, .cursor-target"
            )
          : null;

      setIsHovering(Boolean(interactive));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
      setIsClicking(false);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    area.addEventListener("mousemove", moveCursor);

    area.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    area.addEventListener(
      "mousedown",
      handleMouseDown
    );

    window.addEventListener(
      "mouseup",
      handleMouseUp
    );

    return () => {
      area.removeEventListener(
        "mousemove",
        moveCursor
      );

      area.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      area.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp
      );
    };
  }, []);

  return (
    <>
      {isVisible && (
        <>
          <div
            className={[
              "custom-cursor",
              isHovering ? "hovering" : "",
              isClicking ? "clicking" : "",
            ].join(" ")}
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
          />

          <div
            className={`cursor-ring ${
              isHovering ? "hovering" : ""
            }`}
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
          />
        </>
      )}
    </>
  );
}

import { useEffect, useRef, useState } from "react";

const COLORS = [
  "#F4B720",
  "#E23D28",
  "#172A52",
  "#FFFFFF",
  "#F4B720",
];

export default function P_FX() {
  const [bursts, setBursts] = useState([]);
  const nextId = useRef(0);

  useEffect(() => {
    const page = document.querySelector(".p-page");
    if (!page) return;

    const onPointerDown = (event) => {
      if (
        event.pointerType === "mouse" &&
        event.button !== 0
      ) {
        return;
      }

      if (
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
      ) {
        return;
      }

      const burst = {
        id: nextId.current++,
        x: event.clientX,
        y: event.clientY,
      };

      setBursts((previous) => [
        ...previous.slice(-4),
        burst,
      ]);
    };

    page.addEventListener("pointerdown", onPointerDown);

    return () => {
      page.removeEventListener(
        "pointerdown",
        onPointerDown
      );
    };
  }, []);

  return (
    <div className="p-fx" aria-hidden="true">
      {bursts.map((burst) => (
        <div
          className="p-fx__burst"
          key={burst.id}
          style={{
            left: burst.x,
            top: burst.y,
          }}
          onAnimationEnd={(event) => {
            if (
              event.target !== event.currentTarget
            ) {
              return;
            }

            setBursts((prev) =>
              prev.filter(
                (item) => item.id !== burst.id
              )
            );
          }}
        >
          <span className="p-fx__ring" />

          {Array.from(
            { length: 28 },
            (_, i) => {
              const angle =
                (Math.PI * 2 * i) / 28;

              const distance =
                75 + (i % 6) * 18;

              return (
                <span
                  className="p-fx__spark"
                  key={i}
                  style={{
                    "--dx": `${
                      Math.cos(angle) * distance
                    }px`,

                    "--dy": `${
                      Math.sin(angle) * distance
                    }px`,

                    "--c":
                      COLORS[i % COLORS.length],

                    "--size": `${
                      5 + (i % 4) * 2
                    }px`,

                    "--delay": `${
                      (i % 4) * 22
                    }ms`,

                    borderRadius:
                      i % 3 === 0
                        ? "2px"
                        : "50%",
                  }}
                />
              );
            }
          )}
        </div>
      ))}
    </div>
  );
}

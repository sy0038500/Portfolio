import { useEffect, useRef } from "react";
import "./P_Ending.css";

export default function P_Ending() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const show = () => {
      section.classList.add("is-visible");
    };

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="p-ending"
      aria-label="RETRO CELL 프로젝트 엔딩"
    >
      <div className="p-ending__inner">
        <blockquote className="p-ending__quote">
          <span className="p-ending__quote-mark">“</span>

          <span className="p-ending__quote-line">
            사용자의 움직임에 <strong>즉각 반응하는 인터렉션</strong>
            으로,
          </span>

          <span className="p-ending__quote-line">제품을 읽는 것을 넘어</span>

          <span className="p-ending__quote-line">
            <strong>직접 탐색하는 경험</strong>을 설계했습니다.
          </span>

          <span className="p-ending__quote-mark">“</span>
        </blockquote>

        <div className="p-ending__phone">
          <img
            src="/assets/index/pf_index2.webp"
            alt="RETRO CELL CLUB 모바일 목업"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

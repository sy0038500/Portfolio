import { useEffect, useRef } from "react";
import "./GeoEnding.css";

export default function GeoEnding() {
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
      className="geo-ending"
      aria-label="국토정보플랫폼 프로젝트 엔딩"
    >
      <div className="geo-ending__inner">
        <blockquote className="geo-ending__quote">
          <span className="geo-ending__quote-mark">“</span>

          <span className="geo-ending__quote-line">
            <strong>데이터의 의미</strong>를 먼저 이해하고,
          </span>

          <span className="geo-ending__quote-line">
            다음 행동을 망설이지 않는
          </span>

          <span className="geo-ending__quote-line">
            <strong>탐색 경험</strong>을 설계했습니다.
          </span>

          <span className="geo-ending__quote-mark">“</span>
        </blockquote>

        <div className="geo-ending__phone">
          <img
            src="/assets/index/pf_index1.webp"
            alt="국토정보플랫폼 리디자인 모바일 목업"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

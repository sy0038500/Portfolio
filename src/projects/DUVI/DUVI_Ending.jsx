import { useEffect, useRef } from "react";
import "./DUVI_Ending.css";

export default function DUVI_Ending() {
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
      className="duvi-ending"
      aria-label="DUVI 웹서비스 프로젝트 엔딩"
    >
      <div className="duvi-ending__inner">
        {/* 01. 프로젝트 엔딩 문구 */}
        <blockquote className="duvi-ending__quote">
          <span className="duvi-ending__quote-mark">“</span>

          <span className="duvi-ending__quote-line">
            흩어진 도시정보를 한눈에 비교하고,
          </span>

          <span className="duvi-ending__quote-line">
            <strong>나에게 맞는 지역을 스스로 판단할 수 있는</strong>
          </span>

          <span className="duvi-ending__quote-line">
            탐색 경험을 설계했습니다.
          </span>

          <span className="duvi-ending__quote-mark">“</span>
        </blockquote>

        {/* 02. 기존 INDEX 모바일 목업 */}
        <div className="duvi-ending__phone">
          <img
            src="/assets/index/pf_index4.webp"
            alt="DUVI 도시활력지표 웹서비스 모바일 목업"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

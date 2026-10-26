import { useEffect, useRef } from "react";
import "./AI_Ending.css";

export default function AI_Ending() {
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
      className="ai-ending"
      aria-label="AI Dashboard 프로젝트 엔딩"
    >
      <div className="ai-ending__inner">
        <blockquote className="ai-ending__quote">
          <span className="ai-ending__quote-mark">“</span>

          <span className="ai-ending__quote-line">
            오늘의 기분과 할 일을 반영해,
          </span>

          <span className="ai-ending__quote-line">
            <strong>나에게 맞는 하루 시작 화면</strong>을
          </span>

          <span className="ai-ending__quote-line">
            구성하는 경험을 설계했습니다.
          </span>

          <span className="ai-ending__quote-mark">“</span>
        </blockquote>

        <div className="ai-ending__phone">
          <img
            src="/assets/index/pf_index3.webp"
            alt="AI 개인화 대시보드 모바일 목업"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";
import "./AI_MainDesign.css";

export default function AI_MainDesign() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      section.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ai-main-design"
      aria-labelledby="ai-main-design-title"
    >
      {/* 01. 좌측 상단 페이지 타이틀 */}
      <h2 id="ai-main-design-title" className="ai-main-design__eyebrow">
        Main Design
      </h2>

      {/* 02. 메인 반응형 목업 이미지 */}
      <div className="ai-main-design__visual">
        <img
          src="assets/AI/pf_pro3_main.png"
          alt="AI 개인화 대시보드의 데스크톱, 노트북, 스마트폰, 태블릿 화면 목업"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";
import "./AI_Hypothesis.css";

export default function AI_Hypothesis() {
  const sectionRef = useRef(null);
  const equationRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const equation = equationRef.current;
    if (!section || !equation) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      section.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    // 원형 요소가 보일 때 애니메이션 시작
    observer.observe(equation);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ai-hypothesis"
      aria-labelledby="ai-hypothesis-title"
    >
      <h2 id="ai-hypothesis-title" className="ai-hypothesis__eyebrow">
        Core UX Hypothesis
      </h2>

      <div className="ai-hypothesis__intro">
        <h3>“ 나의 감정과 오늘의 상태에 맞춰 변화하는 AI 개인화 대시보드 “</h3>
        <p>
          기존 대시보드는 사용자의 현재 감정, 상황에 따라 메시지와 화면
          분위기가 달라지는 경험은 부족했습니다.
        </p>
      </div>

      {/* 원1 -> + -> 원2 -> + -> 원3 순차 등장 */}
      <div ref={equationRef} className="ai-hypothesis__equation">
        <div className="ai-hypothesis__step ai-hypothesis__circle">
          <span>Emotion</span>
          <span>감정</span>
        </div>

        <img
          className="ai-hypothesis__step ai-hypothesis__plus"
          src="/assets/AI/AI_Plus.svg"
          alt="더하기"
        />

        <div className="ai-hypothesis__step ai-hypothesis__circle">
          <span>Daily</span>
          <span>할 일 · 시간 · 날씨</span>
        </div>

        <img
          className="ai-hypothesis__step ai-hypothesis__plus"
          src="/assets/AI/AI_Plus.svg"
          alt="더하기"
        />

        <div className="ai-hypothesis__step ai-hypothesis__circle">
          <span>Widget Control</span>
          <span>위젯 크기·위치 조정</span>
        </div>
      </div>

      {/* 다섯 요소가 모두 등장한 후 화살표 */}
      <img
        className="ai-hypothesis__arrow"
        src="/assets/AI/AI_ArrowDown.svg"
        alt="아래 결과를 향하는 화살표"
      />

      {/* 화살표 다음으로 최종 문장 */}
      <div className="ai-hypothesis__conclusion">
        <img src="/assets/AI/AI_BracketLeft.svg" alt="" aria-hidden="true" />
        <p>복잡한 탐색 없이 오늘의 흐름을 한눈에 파악하는 시작 화면</p>
        <img src="/assets/AI/AI_BracketRight.svg" alt="" aria-hidden="true" />
      </div>
    </section>
  );
}

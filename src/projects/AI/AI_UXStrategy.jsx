import { useEffect, useRef } from "react";
import "./AI_UXStrategy.css";

const comparisons = [
  {
    id: "quote",
    before: [
      "기존 명언은 사용자 상태와",
      "관계없이 동일하게 제공",
    ],
    feature: "AI Quote",
    after: [
      "기분과 오늘의 할 일을 Gemini API",
      "프롬포트에 연결",
    ],
  },
  {
    id: "mood",
    before: [
      "화면 분위기가 사용자의 기분과",
      "연결되지 않음",
    ],
    feature: "Mood Theme",
    after: [
      "입력한 기분에 따라 배경 테마와",
      "강조 색상 변화",
    ],
  },
  {
    id: "widget",
    before: [
      "사용자마다 필요한 정보와",
      "우선순위가 다름",
    ],
    feature: "Widget Control",
    after: [
      "위젯 추가/숨김, 1·2·3단 크기 조정,",
      "위치 변경 구현",
    ],
  },
  {
    id: "glass",
    before: [
      "위젯이 많아지면 화면이",
      "복잡해보일 수 있음",
    ],
    feature: "Glass UI",
    after: [
      "반투명 카드,",
      "blur·border·soft shadow 효과",
    ],
  },
];

export default function AI_UXStrategy() {
  const sectionRef = useRef(null);
  const comparisonsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const rows = comparisonsRef.current;
    if (!section || !rows) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
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
      { threshold: 0.12 }
    );

    observer.observe(rows);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ai-ux-strategy"
      aria-labelledby="ai-ux-strategy-title"
    >
      {/* 01. 좌측 상단 페이지 타이틀 */}
      <h2
        id="ai-ux-strategy-title"
        className="ai-ux-strategy__eyebrow"
      >
        UX Strategy
      </h2>

      {/* 02. 중앙 타이틀 및 설명 */}
      <div className="ai-ux-strategy__intro">
        <h3>
          나의 상태에 따라 달라지는{" "}
          <strong>개인화 대시보드</strong> 설계
        </h3>

        <p>
          <span>
            사용자의 기분, 오늘의 할 일, 시간·날씨 정보를
            AI 명언과 배경 테마에 연결하고, 필요한 위젯은
            직접 구성할 수 있도록 설계했습니다.
          </span>
          <span>
            이를 통해 대시보드가 고정된 정보 화면이 아니라,
            사용자의 하루 상태에 맞춰 변화하는 시작 화면이
            되도록 하였습니다.
          </span>
        </p>
      </div>

      {/* 03. As-is / To-be 비교 */}
      <div
        className="ai-ux-strategy__comparison"
        ref={comparisonsRef}
      >
        <div className="ai-ux-strategy__headings">
          <h4>As-is</h4>
          <span />
          <h4>To-be</h4>
        </div>

        <div className="ai-ux-strategy__rows">
          {comparisons.map((item, index) => (
            <div
              className="ai-ux-strategy__row"
              key={item.id}
              style={{
                "--arrow-offset": `${index * -175}px`,
                "--left-delay": `${80 + index * 120}ms`,
                "--arrow-delay": `${940 + index * 70}ms`,
                "--right-delay": `${1540 + index * 140}ms`,
              }}
            >
              {/* 기존 문제점 카드 */}
              <article className="ai-ux-strategy__card ai-ux-strategy__card--before">
                <span className="ai-ux-strategy__mobile-label">
                  As-is
                </span>
                <p>
                  {item.before.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              </article>

              {/* Figma 원본 화살표 */}
              <div
                className="ai-ux-strategy__arrow"
                aria-hidden="true"
              >
                <img
                  src="/assets/AI/AI_UXStrategy_Arrows.svg"
                  alt=""
                  width="43"
                  height="559"
                />
              </div>

              {/* 개선 방안 카드 */}
              <article
                className={`ai-ux-strategy__card ai-ux-strategy__card--after ai-ux-strategy__card--${
                  index % 2 === 0 ? "yellow" : "orange"
                }`}
              >
                <span className="ai-ux-strategy__mobile-label">
                  To-be
                </span>

                <h5>{item.feature}</h5>

                <p>
                  {item.after.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

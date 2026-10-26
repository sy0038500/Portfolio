import { useEffect, useRef } from "react";
import "./AI_MoodTheme.css";

// Figma 362:1015
// 원본 카드 순서 및 텍스트 유지

const firstRow = [
  {
    id: "lemon",
    name: "Lemon Yellow",
    meaning: "기본 상태, 밝은 시작",
  },
  {
    id: "aurora",
    name: "Aurora Purple",
    meaning: "아이디어",
  },
  {
    id: "ocean",
    name: "Deep Ocean",
    meaning: "작업",
  },
  {
    id: "blue",
    name: "Calm Blue",
    meaning: "지침",
  },
  {
    id: "lavender",
    name: "Lavender",
    meaning: "걱정",
  },
];

const secondRow = [
  {
    id: "orange",
    name: "Sunny Orange",
    meaning: "기쁨",
  },
  {
    id: "green",
    name: "Deep green",
    meaning: "집중, 몰입",
  },
  {
    id: "midnight",
    name: "Midnight",
    meaning: "우울",
  },
  {
    id: "pink",
    name: "Pink Pop",
    meaning: "설렘",
  },
];

// 공통 디자인을 사용하는 컬러 카드
function MoodCard({ theme }) {
  return (
    <article className="ai-mood-theme__card">
      <div
        className={`ai-mood-theme__swatch ai-mood-theme__swatch--${theme.id}`}
        aria-hidden="true"
      />

      <div className="ai-mood-theme__copy">
        <h3>{theme.name}</h3>
        <p>{theme.meaning}</p>
      </div>
    </article>
  );
}

export default function AI_MoodTheme() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

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
      { threshold: 0.08 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ai-mood-theme"
      aria-labelledby="ai-mood-theme-title"
    >
      {/* 01. 좌측 상단 타이틀 */}
      <h2
        id="ai-mood-theme-title"
        className="ai-mood-theme__eyebrow"
      >
        Mood Theme System
      </h2>

      {/* 02. 컬러 시스템 */}
      <div className="ai-mood-theme__grid">
        <div className="ai-mood-theme__row ai-mood-theme__row--first">
          {firstRow.map((theme) => (
            <MoodCard
              key={theme.id}
              theme={theme}
            />
          ))}
        </div>

        <div className="ai-mood-theme__row ai-mood-theme__row--second">
          {secondRow.map((theme) => (
            <MoodCard
              key={theme.id}
              theme={theme}
            />
          ))}
        </div>
      </div>

      {/* 03. 하단 전체 테마 목업 */}
      <div className="ai-mood-theme__preview">
        <img
          src="/assets/AI/pf_pro3_colorview.png"
          alt="아홉 가지 감정 테마가 적용된 모바일 대시보드 디자인 비교"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}

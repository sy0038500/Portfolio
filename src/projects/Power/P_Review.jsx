import { useEffect, useRef, useState } from "react";
import "./P_Review.css";

const technicalResults = [
  "React + Vite 기반 랜딩페이지 구현",
  "5개 섹션 구성",
  "인터랙션 4종 구현",
  "반응형 웹사이트 구현",
  "Github 배포 완료",
];

const uxResults = [
  "페이지 흐름 인지 유도",
  "조작 가능 영역 인식 강화",
  "즉각적인 시각 피드백 구현",
];

const reviews = [
  {
    key: "good",
    label: "GOOD",
    content:
      "브랜드 콘셉트, 컬러 시스템, 인터랙션 방향을 하나의 레트로 무드 안에서 일관되게 연결",
  },
  {
    key: "try",
    label: "TRY",
    content:
      "Vibe Coding을 활용해 낯선 마이크로 인터랙션을 빠르게 실험하고 구현",
  },
  {
    key: "limit",
    label: "LIMIT",
    content:
      "실제 사용자 데이터를 기반으로 한 체류 시간, 클릭률, 인터랙션 사용 여부까지는 검증하지 못 함",
  },
  {
    key: "next",
    label: "NEXT",
    content:
      "추후에는 GA나 클릭 로그를 연결해 인터랙션 효과를 정량적으로 분석하고, 모바일 환경에서는 움직임의 강도를 조절하고 싶음",
  },
];

export default function P_Review() {
  const sectionRef = useRef(null);
  const [selected, setSelected] = useState(null);

  // 01. 스크롤 등장 효과
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(
      ".p-review__stat, .p-review__item"
    );

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "is-preparing"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    items.forEach((item) => {
      item.classList.add("is-preparing");
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  // 02. 회고 항목 클릭 시 강조 / 재클릭 시 해제
  const handleSelect = (key) => {
    setSelected((current) =>
      current === key ? null : key
    );
  };

  return (
    <section
      ref={sectionRef}
      className="p-review"
      aria-labelledby="p-review-heading"
    >
      <h2
        id="p-review-heading"
        className="p-review__eyebrow"
      >
        Result &amp; Review
      </h2>

      {/* 상단 - 정량적 기술 성과 / UX 기대 효과 */}
      <div className="p-review__stats">
        <div className="p-review__stat">
          <h3>정량적 기술 성과</h3>

          <ul className="p-review__list">
            {technicalResults.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </div>

        <div className="p-review__stat">
          <h3>UX 기대 효과</h3>

          <ul className="p-review__list">
            {uxResults.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 하단 - Project Review */}
      <div className="p-review__reflection">
        <h3 className="p-review__reflection-title">
          Project Review
        </h3>

        <div className="p-review__grid">
          {reviews.map((review) => (
            <article
              key={review.key}
              className={`
                p-review__item
                p-review__item--${review.key}
                ${selected === review.key
                  ? "is-selected"
                  : ""}
              `}
            >
              <button
                type="button"
                className="p-review__label"
                onClick={() =>
                  handleSelect(review.key)
                }
                aria-pressed={
                  selected === review.key
                }
                aria-label={`${review.label} 회고 내용 강조`}
              >
                {review.label}
              </button>

              <p className="p-review__item-copy">
                {review.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

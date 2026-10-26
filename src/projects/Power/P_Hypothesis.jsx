import { useEffect, useRef } from "react";
import "./P_Hypothesis.css";

const STEPS = [
  {
    number: "01",
    title: "사용자 행동",
    className: "p-hypo__step--one",
    content: (
      <>
        사용자가 페이지를 탐색하는 과정에서
        <br className="p-hypo__desktop-break" />
        마우스 이동, 호버, 클릭, 스크롤 행동을 수행한다면
      </>
    ),
  },
  {
    number: "02",
    title: "화면 반응",
    className: "p-hypo__step--two",
    content: (
      <>
        커서 확장, 버튼 반응, 카드 이동, 제품 이미지 확대처럼
        <br className="p-hypo__desktop-break" />
        화면 요소가 사용자의 행동에 즉각적으로 반응하게 될 것이다.
      </>
    ),
  },
  {
    number: "03",
    title: "기대 경험",
    className: "p-hypo__step--three",
    content: (
      <>
        사용자는 제품 정보를 단순히 읽는 것이 아니라
        <br className="p-hypo__desktop-break" />
        <strong className="p-hypo__highlight">
          직접 조작하고 탐색하는 경험으로 인식
        </strong>
        하게 될 것이다.
      </>
    ),
  },
];

export default function P_Hypothesis() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reveal = () => section.classList.add("is-visible");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!("IntersectionObserver" in window) || reducedMotion) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal();
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="p-hypo"
      aria-labelledby="p-hypo-heading"
    >
      <div
        className="p-hypo__yellow-shape"
        aria-hidden="true"
      />

      <p
        className="p-hypo__eyebrow"
        id="p-hypo-heading"
      >
        UX Hypothesis
      </p>

      <p className="p-hypo__statement">
        사용자의 기본 행동에 화면이 즉각적으로 반응할 때, 
        <br className="p-hypo__desktop-break" />
        단일 제품 랜딩페이지는 단순 정보 전달을 넘어
        직접 탐색하는 경험으로 전환될 것이다.
      </p>

      <div className="p-hypo__flow">
        {STEPS.map((step) => (
          <article
            key={step.number}
            className={`p-hypo__step ${step.className}`}
          >
            <div className="p-hypo__step-head">
              <span className="p-hypo__number">
                {step.number}
              </span>

              <h3 className="p-hypo__step-title">
                {step.title}
              </h3>
            </div>

            <p className="p-hypo__step-copy">
              {step.content}
            </p>
          </article>
        ))}

        {/* 기존 노란 화살표 SVG 그대로 사용 */}
        <img
          className="p-hypo__arrow p-hypo__arrow--first"
          src="/assets/Power/P_HypoArrow1.svg"
          alt=""
          aria-hidden="true"
        />

        <img
          className="p-hypo__arrow p-hypo__arrow--second"
          src="/assets/Power/P_HypoArrow2.svg"
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

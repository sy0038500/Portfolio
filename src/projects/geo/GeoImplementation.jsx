import { useEffect } from "react";
import "./GeoImplementation.css";

const implementationItems = [
  {
    title: "시맨틱 마크업",
    description:
      "React 컴포넌트 단위로 시맨틱 구조를 설계했습니다. 각 컴포넌트가 독립적으로 사용될 수 있도록 구성하였습니다.",
  },
  {
    title: "바이브코딩 활용",
    description:
      "AI 프롬프팅 시 웹접근성 기준을 최우선으로 반영하도록 지시하여, 접근성 마크업 규칙이 코드 생성 단계부터 적용될 수 있도록 했습니다.",
  },
  {
    title: "WAI-ARIA 적용",
    description:
      "이미지 alt 값과 aria-label, aria-hidden 속성을 적용하여 지도 서비스와 버튼의 의미를 시각장애 사용자도 텍스트로 인식할 수 있도록 구현했습니다.",
  },
];

function GeoImplementation() {
  useEffect(() => {
    const visual = document.querySelector(".geo-impl__visual");

    if (!visual) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    visual.classList.add("geo-impl--reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    observer.observe(visual);

    return () => {
      observer.disconnect();
      visual.classList.remove("geo-impl--reveal-ready", "is-visible");
    };
  }, []);

  return (
    <section className="geo-impl" aria-labelledby="geo-impl-heading">
      <h2 id="geo-impl-heading" className="geo-impl__heading">
        Implementation
      </h2>

      {/* 상단: 목업 이미지 2개 */}
      <div className="geo-impl__visual">
        <img
          className="geo-impl__laptop"
          src="/assets/geo/pf_markup_mockup.png"
          alt="React 프로젝트의 VS Code 작업 화면이 표시된 노트북 목업"
          loading="lazy"
          decoding="async"
        />

        <div className="geo-impl__code-frame">
          <img
            className="geo-impl__code"
            src="/assets/geo/pf_markup_mockup2.png"
            alt="접근성을 고려한 React 컴포넌트 코드 작업 화면"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* 하단: 구현 방식 3개 */}
      <div className="geo-impl__cards">
        {implementationItems.map((item) => (
          <article className="geo-impl__card" key={item.title}>
            <div className="geo-impl__card-title">
              <h3>{item.title}</h3>
            </div>

            <span className="geo-impl__arrow" aria-hidden="true" />

            <div className="geo-impl__card-description">
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default GeoImplementation;

import { useEffect, useRef } from "react";
import "./AI_Background.css";

const cards = [
  {
    number: "01",
    title: "Existing Dashboard",
    paragraphs: [
      "기존 구글모멘텀 대시보드는 시간, 날씨, 일정, 명언처럼 사용자가 하루를 시작하는 데 필요한 정보를 제공합니다.",
      "하지만 대부분의 정보는 고정된 방식으로 제공되어, 사용자의 감정이나 오늘의 상태에 따라 변화하는 경험은 제한적이었습니다.",
    ],
  },
  {
    number: "02",
    title: "Background",
    paragraphs: [
      "같은 명언이나 같은 배경화면이라도 사용자의 감정상태에 따라 받아들이는 방식은 달라질 수 있습니다.",
      "따라서 기분, 할 일, 시간, 날씨와 같은 요소를 반영한 개인화된 대시보드 구조가 필요하다고 보았습니다.",
    ],
  },
  {
    number: "03",
    title: "Goal",
    paragraphs: [
      "사용자의 기분과 오늘의 상태를 바탕으로 AI가 현재 상황에 맞는 명언과 배경 테마를 제안하도록 설계했습니다.",
      "또한 필요한 위젯을 직접 추가하고 크기와 위치를 조정할 수 있도록 하며, 사용자마다 다른 하루 관리 방식을 반영하고자 합니다.",
    ],
  },
];

export default function AI_Background() {
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
      (entries) => {
        if (entries[0].isIntersecting) {
          section.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ai-background"
      aria-labelledby="ai-background-title"
    >
      <h2 id="ai-background-title" className="ai-background__eyebrow">
        Background &amp; Goal
      </h2>

      <div className="ai-background__question">
        <img
          className="ai-background__quote-icon"
          src="assets/AI/AI_QuoteLeft.svg"
          alt=""
          aria-hidden="true"
        />

        <p>
          모두에게 같은 화면이 아니라,
          <span>
            <strong>지금 나에게 맞는</strong> 하루 시작 화면을 만들 수 없을까?
          </span>
        </p>

        <img
          className="ai-background__quote-icon"
          src="assets/AI/AI_QuoteRight.svg"
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="ai-background__cards">
        {cards.map((card) => (
          <article key={card.number} className="ai-background__card">
            <h3>
              <span>{card.number}</span> {card.title}
            </h3>
            <div className="ai-background__card-copy">
              {card.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

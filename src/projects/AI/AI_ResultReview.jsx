import "./AI_ResultReview.css";

const technicalResults = [
  [
    "Weather API Integration",
    "날씨·기온 실시간 정보 연동",
  ],
  [
    "Gemini API Prompting",
    "사용자 기분과 오늘의 할 일을 바탕으로 맞춤 메시지 생성",
  ],
  [
    "Mood Theme System",
    "감정 키워드에 따른 배경 테마와 강조 색상 변화",
  ],
  [
    "Widget Control",
    "위젯 추가·숨김, 1·2·3단 크기 조정, 위치 변경 구현",
  ],
  [
    "D-day Widget",
    "목표명·날짜·강조 색상 수정 및 localStorage 저장",
  ],
  [
    "Glassmorphism UI",
    "반투명 카드와 blur · border · soft shadow 기반 화면 구성",
  ],
];

const uxEffects = [
  [
    "Personalized Message",
    "맥락 기반 메시지 생성으로 ‘나를 위한 화면’ 체감 강화",
  ],
  [
    "Emotional Screen Control",
    "기분 기반 테마 전환으로 하루 시작 화면의 심리적 부담 완화",
  ],
  [
    "Flexible Dashboard",
    "필요한 위젯을 직접 조정해 사용자별 하루 관리 방식 반영",
  ],
];

function ResultList({ items, kind }) {
  return (
    <ul
      className={`ai-result-review__list ai-result-review__list--${kind}`}
    >
      {items.map(([title, description]) => (
        <li className="ai-result-review__item" key={title}>
          <span
            className={`ai-result-review__dot ai-result-review__dot--${kind}`}
            aria-hidden="true"
          />

          <div className="ai-result-review__copy">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function AI_ResultReview() {
  return (
    <section
      className="ai-result-review"
      aria-labelledby="ai-result-review-title"
    >
      {/* 좌측 상단 페이지 타이틀 */}
      <h2
        id="ai-result-review-title"
        className="ai-result-review__eyebrow"
      >
        Result &amp; Review
      </h2>

      <div className="ai-result-review__grid">
        {/* 01. 기술 구현 성과 */}
        <article className="ai-result-review__panel ai-result-review__panel--technical">
          <h3 className="ai-result-review__panel-title">
            <span>01</span> 기술 구현 성과
          </h3>

          <ResultList
            items={technicalResults}
            kind="technical"
          />
        </article>

        {/* 02. UX 기대 효과 */}
        <article className="ai-result-review__panel ai-result-review__panel--ux">
          <h3 className="ai-result-review__panel-title">
            <span>02</span> UX 기대 효과
          </h3>

          <ResultList
            items={uxEffects}
            kind="ux"
          />
        </article>
      </div>
    </section>
  );
}

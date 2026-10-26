import "./W_Overview.css";

const images = {
  master: "/assets/Urban/W_Master.png",
  view: "/assets/Urban/W_View.png",
};

const approaches = [
  {
    title: "Site Analysis",
    content: "공업 중심의 토지이용과 주거 부적합 시설, 10년간 45.9%의 인구 감소를 확인했습니다.",
  },
  {
    title: "Issue",
    content: "열악한 주거환경과 낮은 교통 접근성, 공장·매립지에 따른 환경 문제가 핵심 과제로 나타났습니다.",
  },
  {
    title: "Concept",
    content: "공존·활력·정주성·건강의 네 가지 가치를 바탕으로 WELL-BEING 건강도시를 제안했습니다.",
  },
];

const concepts = [
  { letter: "W", english: "WITH", korean: "함께하는 도시" },
  { letter: "E", english: "ENERGETIC", korean: "활력 있는 도시" },
  { letter: "L", english: "LIVABLE", korean: "살기 좋은 도시" },
  { letter: "L", english: "LOOK AFTER", korean: "주민을 돌보는 도시" },
];

function PreviewImage({ src, alt, title, onPreview, variant }) {
  return (
    <button
      type="button"
      className={`w-page__image-button w-overview__image-button--${variant}`}
      aria-label={`${title} 이미지 크게 보기`}
      onClick={(event) => onPreview(src, title, event)}
    >
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      <span className="w-page__zoom-label" aria-hidden="true">↗ 크게 보기</span>
    </button>
  );
}

export default function W_Overview({ onPreview }) {
  return (
    <section className="w-page__section w-overview" aria-labelledby="w-overview-title">
      <div className="w-page__container">
        <p className="w-overview__eyebrow">URBAN PROJECT - 01</p>

        <div className="w-overview__layout">
          <div className="w-overview__left">
            <header className="w-overview__header">
              <h2 id="w-overview-title">WELL-Being</h2>
              <p className="w-overview__subtitle">사월마을의 건강한 주거환경을 위한 도시 재설계</p>
              <p className="w-overview__meta">인천 사월마을 · Urban Design Studio · Award</p>
              <p className="w-overview__year">PROJECT YEAR 2024</p>
            </header>

            <article className="w-page__glass w-overview__project-card">
              <h3>PROJECT OVERVIEW</h3>
              <p>기존 인천 사월마을의 생활환경을 분석하고, 보행·녹지·공공공간의 개선을 통해 건강한 주거환경을 제안한 도시설계 프로젝트</p>
            </article>

            <div className="w-overview__approach">
              <h3>DESIGN APPROACH</h3>
              <dl>
                {approaches.map((item) => (
                  <div className="w-overview__approach-row" key={item.title}>
                    <dt>{item.title}</dt>
                    <dd>{item.content}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="w-overview__concept" aria-label="WELL 도시설계 콘셉트">
              <span className="w-overview__concept-arrow" aria-hidden="true">↓</span>
              <ul className="w-overview__concept-list">
                {concepts.map((item, index) => (
                  <li key={`${item.letter}-${index}`} className="w-overview__concept-item">
                    <div className="w-overview__concept-circle" aria-label={`${item.letter}: ${item.english}, ${item.korean}`}>
                      {item.letter}
                    </div>
                    <strong>{item.english}</strong>
                    <span>{item.korean}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-overview__right">
            <figure className="w-overview__figure">
              <figcaption>MASTER PLAN</figcaption>
              <PreviewImage
                src={images.master}
                alt="WELL-BEING 사월마을 도시재설계 마스터플랜"
                title="MASTER PLAN"
                variant="master"
                onPreview={onPreview}
              />
            </figure>

            <figure className="w-overview__figure">
              <figcaption>PERSPECTIVE VIEW</figcaption>
              <PreviewImage
                src={images.view}
                alt="WELL-BEING 사월마을 도시재설계 투시도"
                title="PERSPECTIVE VIEW"
                variant="view"
                onPreview={onPreview}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

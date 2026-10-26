import "./DUVI_Cover.css";

export default function DUVI_Cover() {
  return (
    <section className="duvi-cover" aria-labelledby="duvi-cover-title">
      {/* 01. 기존 DUVI 목업 이미지: 새 에셋을 만들지 않음 */}
      <div className="duvi-cover__visual" aria-hidden="true">
        <img
          src="assets/DUVI/pf_pro4_cover.png"
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* 02. Figma 원본의 대각선 페이드 오버레이 */}
      <div className="duvi-cover__wash" aria-hidden="true" />

      {/* 03. 다른 프로젝트 표지와 동일한 좌상단 표기 */}
      <p className="duvi-cover__eyebrow">
        PORTFOLIO CASE STUDY - 04
      </p>

      {/* 04. 표지 소개 */}
      <div className="duvi-cover__copy">
        <h1 id="duvi-cover-title" className="duvi-cover__title">
          <span>도시활력지표</span>
          <span>플랫폼</span>
        </h1>

        <p className="duvi-cover__subtitle">
          분산된 도시 데이터를 통합해 서울시 행정동별 도시활력을
          비교·탐색할 수 있도록 설계한 데이터 시각화 웹 플랫폼
        </p>

        <a
          className="duvi-cover__link"
          href="https://sy0038500.github.io/DUVI-web/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub 링크
        </a>
      </div>

      {/* 05. 프로젝트 상세 정보 */}
      <ul className="duvi-cover__facts">
        <li>PERIOD: 2026. 05. 09 ~ 2026. 05. 27</li>
        <li>
          My Role : UI/UX 기획 및 퍼블리싱 100%, 데이터 4/11 분야 가공 · 통합 및 DUVI 산정
        </li>
        <li>
          Tech &amp; Tools : Figma, Generative AI (ChatGPT), Vibe Coding
        </li>
        <li>
          Focus : 도시 데이터 가공 및 시각화 &amp; 지도 인터랙션 &amp; 반응형 웹
        </li>
      </ul>
    </section>
  );
}

import "./DUVI_DesignSystem.css";

/* [01] Figma 362:1298 - Core Color System: 색상 정보는 실제 Figma 값 유지 */
const coreColors = [
  { role: "Primary", value: "#08519C", use: "활성화 버튼, 헤더 인터랙션, 푸터, 주요 강조" },
  { role: "Secondary", value: "#3182BD", use: "점수 박스 그라디언트, 그래프" },
  { role: "Accent", value: "#2563EB", use: "섹션 라벨, 강조 텍스트" },
  { role: "Background", value: "rgba(37, 99, 239, 0.31)", use: "웹사이트 전체 배경" },
  { role: "Surface", value: "rgba(255, 255, 255, 0.31)", use: "카드, 패널, 테이블" },
  { role: "Text Primary", value: "rgba(15, 23, 42, 0.31)", use: "제목, 주요 수치" },
  { role: "Text Secondary", value: "rgba(71, 85, 105, 0.31)", use: "본문, 메뉴 텍스트" },
  { role: "Border", value: "rgba(226, 232, 240, 0.31)", use: "카드 구분선, 입력 및 버튼 테두리" },
];

const grades = [
  "#08519C", "#3182BD", "#6BAED6", "#BDD7E7", "#FDD0A2", "#F16913", "#A63603",
];

/* [02] 분야색은 Figma의 3개 세로 열 순서를 그대로 유지 */
const domainColumns = [
  [
    { name: "상권", color: "#7C3AED" },
    { name: "인구", color: "#DC2626" },
    { name: "주택위험", color: "#BE123C" },
    { name: "생활시설", color: "#059669" },
  ],
  [
    { name: "버스", color: "#16A34A" },
    { name: "지하철", color: "#2563EB" },
    { name: "에너지", color: "#CA8A04" },
    { name: "생활인구", color: "#EA580C" },
  ],
  [
    { name: "SDOT", color: "#0891B2" },
    { name: "안전", color: "#0F766E" },
  ],
];

/* [03] Figma에서 원래 이미지였던 UI 요소들은 이미지 그대로 사용 */
const uiAssets = {
  years: "/assets/DUVI/ds_years.png", // Figma 362:1379 (650 × 83)
  domains: "/assets/DUVI/ds_domains.png", // Figma 362:1382 (1684 × 85)
  detail: "/assets/DUVI/ds_detail.png", // Figma 362:1386 (377 × 556)
  rankTop: "/assets/DUVI/ds_ranking_top.png", // Figma 362:1390 (393 × 556)
  rankBottom: "/assets/DUVI/ds_ranking_bottom.png", // Figma 362:1391 (394 × 556)
};

/* [04] Figma Interactions는 확대/크롭 완료된 실제 이미지 3장 사용 */
const interactionImages = [
  { src: "/assets/DUVI/ds_map_default.png", label: "Default" },
  { src: "/assets/DUVI/ds_map_hover.png", label: "Hover" },
  { src: "/assets/DUVI/ds_map_selected.png", label: "Selected" },
];

function ColorTable() {
  return (
    <div className="duvi-design__colors" role="table" aria-label="DUVI 핵심 색상표">
      <div className="duvi-design__color-head" role="row">
        <span role="columnheader">역할</span>
        <span role="columnheader">색상</span>
        <span role="columnheader">실제 사용</span>
      </div>
      {coreColors.map(({ role, value, use }) => (
        <div className="duvi-design__color-row" role="row" key={role}>
          <span role="cell">{role}</span>
          <span role="cell" className="duvi-design__color-cell">
            <span
              className="duvi-design__color-swatch"
              style={{ backgroundColor: value }}
              title={value}
              aria-label={value}
            />
          </span>
          <span role="cell">{use}</span>
        </div>
      ))}
    </div>
  );
}

function Photo({ src, alt, className = "" }) {
  return (
    <img className={className} src={src} alt={alt} loading="lazy" decoding="async" />
  );
}

export default function DUVI_DesignSystem() {
  return (
    <section className="duvi-design" aria-labelledby="duvi-design-title">
      {/* 좌상단 페이지 타이틀: PC 24 / 태블릿 20 / 모바일 18 */}
      <h2 className="duvi-design__eyebrow" id="duvi-design-title">Design System</h2>

      {/* 상단: 좌측 Core / 우측 Grade + Domain */}
      <div className="duvi-design__top">
        <section className="duvi-design__core" aria-labelledby="duvi-design-core-title">
          <h3 id="duvi-design-core-title">Core Color System</h3>
          <ColorTable />
        </section>

        <div className="duvi-design__right">
          <section className="duvi-design__grade" aria-labelledby="duvi-design-grade-title">
            <h3 id="duvi-design-grade-title">DUVI Grade Color</h3>
            <div className="duvi-design__grade-labels">
              <span>높은 도시활력</span>
              <span>낮은 도시활력</span>
            </div>
            <div className="duvi-design__grade-arrow" aria-hidden="true" />
            <div className="duvi-design__grade-swatches">
              {grades.map((color) => (
                <span key={color} style={{ backgroundColor: color }} title={color} />
              ))}
            </div>
          </section>

          <section className="duvi-design__domains" aria-labelledby="duvi-design-domain-title">
            <h3 id="duvi-design-domain-title">Domain Color System</h3>
            <div className="duvi-design__domain-grid">
              {domainColumns.map((column, columnIndex) => (
                <div className="duvi-design__domain-column" key={columnIndex}>
                  {column.map((domain) => (
                    <div className="duvi-design__domain" key={domain.name}>
                      <span>{domain.name}</span>
                      <span
                        className="duvi-design__domain-swatch"
                        style={{ backgroundColor: domain.color }}
                        title={domain.color}
                        aria-label={domain.color}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* UI Components: 임의 구현한 버튼/상세패널/순위표를 제거하고 Figma 사진으로 복구 */}
      <section className="duvi-design__ui" aria-labelledby="duvi-design-ui-title">
        <h3 id="duvi-design-ui-title">UI Components</h3>

        <figure className="duvi-design__year-demo">
          <Photo src={uiAssets.years} alt="연도 선택 버튼 UI 스크린샷" />
          <figcaption>▲ Years Button</figcaption>
        </figure>

        <figure className="duvi-design__filter-demo">
          <div className="duvi-design__filter-viewport">
            <Photo src={uiAssets.domains} alt="분야 선택 필터 버튼 UI 스크린샷" />
          </div>
          <figcaption>▲ Domain Filter Button</figcaption>
        </figure>

        <div className="duvi-design__panel-demo">
          <figure className="duvi-design__preview-figure duvi-design__preview-figure--detail">
            <Photo src={uiAssets.detail} alt="DUVI 원본 상세 패널 스크린샷" />
            <figcaption>▲ Detail Panel</figcaption>
          </figure>

          <figure className="duvi-design__preview-figure duvi-design__preview-figure--ranking">
            <div className="duvi-design__rankings">
              <Photo src={uiAssets.rankTop} alt="DUVI 상위 10개 행정동 랭킹 이미지" />
              <Photo src={uiAssets.rankBottom} alt="DUVI 하위 10개 행정동 랭킹 이미지" />
            </div>
            <figcaption>▲ Ranking Item</figcaption>
          </figure>
        </div>
      </section>

      {/* 하단 Interactions: Figma 원본처럼 중앙의 한정된 폭에서만 배열 */}
      <section className="duvi-design__interactions" aria-labelledby="duvi-design-interactions-title">
        <h3 id="duvi-design-interactions-title">Interactions</h3>
        <div className="duvi-design__interaction-grid">
          {interactionImages.map((item) => (
            <figure className="duvi-design__interaction" key={item.label}>
              <Photo src={item.src} alt={`${item.label} 지도 인터랙션 화면`} />
              <figcaption>▲ {item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </section>
  );
}

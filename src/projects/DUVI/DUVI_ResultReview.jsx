import "./DUVI_ResultReview.css";

/* DUVI 11 — Result & Review / Figma 362:1444 */
const smallResults = [
  {
    value: "5",
    unit: "Years",
    description: "5개 연도의 도시활력 등급과 점수를 전환하며 확인하도록 구현했습니다.",
    tone: "medium",
  },
  {
    value: "11",
    unit: "Domains",
    description: "11개 분야의 정보를 통합하고, 그중 4개 분야의 가공과 최종 DUVI 산정을 담당했습니다.",
    tone: "light",
  },
  {
    value: "7",
    unit: "Grades",
    description: "지역별 점수를 7개 등급으로 구분해 지도 색상으로 시각화했습니다.",
    tone: "light",
  },
  {
    value: "3",
    unit: "States",
    description: "사용자의 행동에 따라 지도 상태가 명확하게 구분되도록 구현했습니다.",
    tone: "medium",
  },
];

const expectedEffects = [
  {
    method: "행정동별 도시활력을 지도 위에 색상과 등급으로 시각화",
    title: "빠른 현황 파악",
    description: "복잡한 수치를 직접 읽지 않아도 서울시 전체의 도시활력 분포와 지역별 차이를 빠르게 인지할 수 있을 것이다.",
  },
  {
    method: "관심 행정동의 종합점수와 분야별 정보를 함께 제공",
    title: "지역 특성 이해",
    description: "종합점수의 결과뿐 아니라 분야별 강점과 취약점을 함께 확인해 지역의 특성을 구체적으로 이해할 수 있을 것이다.",
  },
  {
    method: "연도·분야·지역 순위를 전환하며 원하는 조건을 중심으로 탐색",
    title: "목적에 맞는 지역 비교",
    description: "사용자가 교통·주거·교육·생활환경 등 자신이 중요하게 생각하는 조건에 따라 여러 지역을 비교할 수 있을 것이다.",
  },
];

export default function DUVI_ResultReview() {
  return (
    <section className="duvi-result" aria-labelledby="duvi-result-title">
      <div className="duvi-result__inner">
        {/* 01. 좌측 상단 페이지 타이틀 */}
        <h2 id="duvi-result-title" className="duvi-result__eyebrow">
          Result &amp; Review
        </h2>

        {/* 02. 정량적 기술 성과 */}
        <section className="duvi-result__section" aria-labelledby="duvi-result-results-heading">
          <header className="duvi-result__section-heading">
            <h3 id="duvi-result-results-heading">01 정량적 기술 성과</h3>
            <p>다양한 도시 데이터를 통합해 서울시 행정동별 도시활력을 실제로 탐색할 수 있는 반응형 웹으로 구현했습니다.</p>
          </header>
          <div className="duvi-result__stats">
            <article className="duvi-result__stat-large">
              <strong className="duvi-result__stat-big-number">426개</strong>
              <span className="duvi-result__stat-large-label">서울시 행정동</span>
              <p>서울시 전 행정동의 DUVI 점수와 등급을<br className="duvi-result__break-wide" /> 지도 위에 시각화했습니다.</p>
            </article>
            <div className="duvi-result__stats-small">
              {smallResults.map((item) => (
                <article key={item.unit} className={`duvi-result__stat-small duvi-result__stat-small--${item.tone}`}>
                  <strong className="duvi-result__stat-number">{item.value}</strong>
                  <span className="duvi-result__stat-unit">{item.unit}</span>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 03. UX 기대 효과: 설계 방식 → 사용자 기대 효과 */}
        <section className="duvi-result__section duvi-result__section--ux" aria-labelledby="duvi-result-ux-heading">
          <header className="duvi-result__section-heading">
            <h3 id="duvi-result-ux-heading">02 UX 기대 효과</h3>
            <p>도시정보를 단순히 제공하는 것을 넘어, 사용자의 이해와 비교 과정에 어떤 변화를 줄 수 있는지 정리했습니다.</p>
          </header>
          <div className="duvi-result__ux-matrix">
            <div className="duvi-result__ux-labels" aria-hidden="true">
              <span>사용한 설계 방식</span>
              <span>사용자 기대 효과</span>
            </div>
            <div className="duvi-result__ux-rows">
              {expectedEffects.map((item, index) => (
                <div className="duvi-result__ux-row" key={item.title}>
                  <div className="duvi-result__method">
                    <p>{item.method}</p>
                  </div>
                  <div className="duvi-result__arrow" aria-hidden="true">
                    <span className="duvi-result__arrow-shaft" />
                  </div>
                  <div className={`duvi-result__effect duvi-result__effect--${index + 1}`}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04. 회고: 데스크탑 타임라인 / 모바일 순차 배열 */}
        <section className="duvi-result__section duvi-result__section--review" aria-labelledby="duvi-result-review-heading">
          <header className="duvi-result__section-heading">
            <h3 id="duvi-result-review-heading">03 Project Review</h3>
            <p>프로젝트 과정에서 내린 판단과 발견한 한계, 다음 프로젝트에 적용할 개선 방향을 정리했습니다.</p>
          </header>

          <div className="duvi-result__timeline">
            <article className="duvi-result__reflection duvi-result__reflection--achievement">
              <h4>01 Achievement</h4>
              <h5>복잡한 정보를 단계적인 탐색 구조로 전환</h5>
              <p>
                처음에는 다양한 지역정보를 한 화면에 모두 제공하려 했지만,
                정보량이 많아 핵심 내용을 빠르게 파악하기 어렵다고 판단했습니다.
                이에 <strong>서울 전체 현황 확인 → 관심 지역 선택 → 분야별 상세정보 확인</strong> 순서로 정보를 단계화했습니다.
              </p>
              <p className="duvi-result__reflection-emphasis">
                복잡한 데이터를 사용자의 탐색 흐름에 맞는 화면 구조로 전환한 점이 가장 잘한 부분이라고 생각합니다.
              </p>
            </article>

            <article className="duvi-result__reflection duvi-result__reflection--next">
              <h4>03 Next Steps</h4>
              <h5>사용자 과업을 먼저 정의하고 모바일 탐색 맥락을 유지</h5>
              <p>
                다음 프로젝트에서는 와이어프레임 단계부터 사용자가 수행할 과업과 측정 기준을 정의하고,
                지역 선택 시간과 정보 탐색 성공 여부를 확인할 계획입니다.
              </p>
              <p className="duvi-result__reflection-emphasis">
                모바일에서는 선택한 지역의 상세정보를 지도 위 바텀시트로 제공해,
                <strong> 지도와 결과를 동시에 확인할 수 있도록 개선</strong>하고자 합니다.
              </p>
            </article>

            {/* Figma의 타임라인 벡터: 선 + 3개 점 + 화살촉 */}
            <div className="duvi-result__timeline-rail" aria-hidden="true">
              <i /><i /><i />
            </div>

            <article className="duvi-result__reflection duvi-result__reflection--limitation">
              <h4>02 Limitation</h4>
              <h5>실제 사용자를 통한 설계 가설 검증 부족</h5>
              <p>
                페르소나와 UX 가설을 바탕으로 화면을 설계했지만, 실제 이사 예정 사용자를 대상으로 한 과업 테스트까지 진행하지 못했습니다.
                <strong> 따라서 지역정보의 이해와 비교가 실제로 더 쉬워졌는지는 설계 결과를 중심으로만 판단했다는 한계</strong>가 있습니다.
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}

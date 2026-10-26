import "./DUVI_Background.css";

const goals = [
  ["Goal 01", "낯선 지역에 대한", "불안 완화"],
  ["Goal 02", "분산된 정보의", "탐색 부담 감소"],
  ["Goal 03", "지역 간 차이의", "직관적인 비교"],
];
const dimensions = [
  ["교통", "traffic"],
  ["주거", "housing"],
  ["문화", "culture"],
  ["안전", "safety"],
  ["상권", "commerce"],
];

export default function DUVI_Background() {
  return (
    <section
      className="duvi-background"
      aria-labelledby="duvi-background-heading"
    >
      <h2 id="duvi-background-heading" className="duvi-background__eyebrow">
        Background &amp; Goal
      </h2>
      <div className="duvi-background__layout">
        <div className="duvi-background__story">
          <h3>좋은 도시의 조건을 하나의 점수로 확인할 수는 없을까?</h3>
          <div className="duvi-background__text">
            <h4>Background</h4>
            <p>
              지역을 선택할 때 사람들은 교통, 주거, 안전, 교육, 문화 등 다양한
              조건을 함께 고려합니다.
              <br />
              하지만 관련 정보가 여러 서비스에 분산되어 있어 낯선 지역의
              생활환경을 한눈에 이해하고 비교하기 어렵습니다.
            </p>
          </div>
          <span className="duvi-background__down" aria-hidden="true" />
          <div className="duvi-background__text">
            <h4>Project Goal</h4>
            <p>
              도시활력지표(Dynamic Urban Vitality Index)는 도시의 기본적인
              조건과 실제 생활 속 움직임을 함께 시각화하여, 사용자가 지역의
              활력을 직관적으로 파악하고 관심 지역을 간편하게 비교·탐색하도록
              설계했습니다.
            </p>
          </div>
          <div className="duvi-background__goals">
            {goals.map(([heading, first, second]) => (
              <div key={heading} className="duvi-background__goal">
                <strong>{heading}</strong>
                <p>
                  {first}
                  <br />
                  {second}
                </p>
              </div>
            ))}
          </div>
          <span className="duvi-background__down" aria-hidden="true" />
          <p className="duvi-background__conclusion">
            <span>
              낯선 지역에 대한 불안은 줄이고, 정보 탐색의 부담은 덜어내는 것.
            </span>
            <span>이것이 DUVI-WEB의 목표입니다.</span>
          </p>
        </div>
        <div
          className="duvi-background__example"
          aria-label="여러 도시 조건이 하나의 도시활력 점수로 통합되는 예시"
        >
          <div className="duvi-background__cluster">
            <span className="duvi-background__ex">Ex)</span>
            {dimensions.map(([name, type]) => (
              <span
                key={type}
                className={`duvi-background__bubble duvi-background__bubble--${type}`}
              >
                {name}
              </span>
            ))}
          </div>
          <div className="duvi-background__arrow" aria-hidden="true" />
          <strong className="duvi-background__score">
            DUVI SCORE 82.4
            <br />
            도시활력 2등급
          </strong>
        </div>
      </div>
    </section>
  );
}

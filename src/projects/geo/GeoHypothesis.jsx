
import "./GeoHypothesis.css";

const hypotheses = [
  {
    id: "01",
    title: "선택 전 정보 제공",
    description:
      "대표 이미지와 한 줄 요약을 제공하면, 사용자는 클릭하기 전에 데이터 내용을 예측할 수 있다.",
  },
  {
    id: "02",
    title: "정보 유형별 화면 패턴 정리",
    description:
      "서비스의 목적에 따라 카드·리스트·지도 등 화면 패턴을 구분하면, 사용자는 비슷해 보이는 기능의 차이를 빠르게 이해할 수 있다.",
  },
  {
    id: "03",
    title: "버튼 상태 명확화",
    description:
      "Hover와 버튼 상태를 명확히 표현하면, 사용자는 선택 가능한 요소와 현재 상태를 즉시 인지할 수 있다.",
  },
];

function GeoHypothesis() {
  return (
    <section
      className="geo-hypothesis"
      aria-labelledby="geo-hypothesis-heading"
    >
      <h2
        id="geo-hypothesis-heading"
        className="geo-hypothesis__heading"
      >
        Core UX Hypothesis
      </h2>

      <div className="geo-hypothesis__flow">
        {/* 01. 페르소나 문제 */}
        <div className="geo-hypothesis__problem">
          <h3 className="geo-hypothesis__problem-title">
            Persona Problem
          </h3>

          <div className="geo-hypothesis__problem-box">
            <p>
              전문 용어 중심의 설명, 유사한 화면 구조,
              부족한 상호작용 단서로 인해 지리데이터에
              익숙하지 않은 사용자는 서비스의 차이를
              구분하고 다음 행동을 결정하기 어렵습니다.
            </p>
          </div>
        </div>

        {/* 02. 핵심 UX 가설 3개 */}
        <div className="geo-hypothesis__solutions">
          {hypotheses.map((item) => (
            <div
              className="geo-hypothesis__solution"
              key={item.id}
            >
              <h3 className="geo-hypothesis__solution-title">
                {item.title}
              </h3>

              <div className="geo-hypothesis__solution-box">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 03. 최종 핵심 가설 */}
        <div className="geo-hypothesis__result">
          <p>
            정보의 성격과 다음 행동을 화면에서
            미리 이해할 수 있다면, 지리데이터에
            익숙하지 않은 사용자도 원하는
            서비스를 스스로 탐색할 수 있을 것이다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GeoHypothesis;

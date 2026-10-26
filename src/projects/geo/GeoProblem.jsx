
import "./GeoProblem.css";

const painPoints = [
  {
    number: "01",
    title: ["선택 전,", "데이터 정보 부족"],
    description: [
      "지리 서비스에 대한 예시 이미지나 미리보기 정보가 부족하여 제공 데이터를 예측하기 어렵다.",
      "사용자는 실제 제공 데이터를 확인하기 위해 여러 항목을 직접 클릭해야 하는 불편함이 있다.",
    ],
  },
  {
    number: "02",
    title: ["반복적인 형태의", "정보 배열"],
    description: [
      "서로 다른 정보가 계속해서 비슷한 형태로 반복 나열되어, 사용자는 정보 간의 차이와 중요도를 구분하기 어렵다.",
    ],
  },
  {
    number: "03",
    title: ["버튼 반응", "인지 어려움"],
    description: [
      "기존 사이트의 버튼은 크기가 작고, 마우스를 올렸을 때에 뚜렷한 변화가 나타나지 않는다.",
      "사용자는 사이트를 이용할 때, 현재 선택 가능한 상태인지 직관적으로 알기 어렵다.",
    ],
  },
];

function GeoProblem() {
  return (
    <section
      className="geo-problem"
      aria-labelledby="geo-problem-heading"
    >
      <h2
        id="geo-problem-heading"
        className="geo-problem__heading"
      >
        Problem Definition
      </h2>

      {/* 상단 설명 */}
      <p className="geo-problem__intro">
        <strong>
          직접 느낀 불편함을 KWCAG(웹접근성) 지침과
          휴리스틱 원칙
        </strong>
        으로 학습시킨 AI 모델로 교차 검증한 결과
        <span>
          다음 3가지 페인 포인트를 도출했습니다.
        </span>
      </p>

      {/* 페인포인트 3개 */}
      <ol className="geo-problem__cards">
        {painPoints.map((point) => (
          <li
            key={point.number}
            className="geo-problem__card"
          >
            <div className="geo-problem__card-top">
              <div className="geo-problem__number-group">
                <span className="geo-problem__label">
                  Pain Point
                </span>

                <span
                  className="geo-problem__number"
                  aria-hidden="true"
                >
                  {point.number}
                </span>
              </div>

              <h3 className="geo-problem__card-title">
                {point.title.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h3>
            </div>

            <div className="geo-problem__card-description">
              {point.description.map((sentence) => (
                <p key={sentence}>{sentence}</p>
              ))}
            </div>
          </li>
        ))}
      </ol>

      {/* 하단 정리 */}
      <p className="geo-problem__conclusion">
        결과적으로 사용자는 필요한 데이터를 찾기 위해
        반복적인 탐색 과정을 거쳐야 했으며,
        <span>
          지리 데이터에 익숙하지 않은 사용자일수록
          이 문제를 더 크게 체감하는 구조였습니다.
        </span>
      </p>
    </section>
  );
}

export default GeoProblem;

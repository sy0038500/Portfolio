import "./AI_ProjectReview.css";

const reviewColumns = [
  {
    id: "achievements",
    number: "01",
    heading: "Achievements",
    entries: [
      {
        title: "API + AI 연결",
        description:
          "AI 메시지와 화면 테마가 연동되지 않아 개인화 흐름 약화",
        result:
          "입력값에 따라 두 요소가 함께 변화하도록 연결",
      },
      {
        title: "개인화 위젯 구성",
        description:
          "기능 증가에 따른 화면 복잡도 상승",
        result:
          "크기·위치·편집 규칙 통일로 사용자 맞춤 구성 구현",
      },
      {
        title: "부드러운 화면 분위기",
        emphasized: "글래스모피즘 UI",
        description: "로 여러 위젯을 가볍게 구분",
      },
    ],
  },
  {
    id: "limitations",
    number: "02",
    heading: "Limitations",
    entries: [
      {
        title: "API 응답 안정성",
        description:
          "Gemini API 호출 제한과 응답 지연 발생",
        result:
          "로딩·재시도·이전 결과 유지 등 예외 대응 부족",
      },
      {
        title: "테마 추천 기준",
        description:
          "키워드 기반의 기본적인 테마 추천 가능",
        result:
          "문맥과 복합적인 감정 반영에는 한계",
      },
      {
        title: "사용자 데이터 확장성",
        description:
          "localStorage 기반의 빠른 저장 구현",
        result:
          "기기 간 동기화와 장기 데이터 관리에 한계",
      },
    ],
  },
  {
    id: "next",
    number: "03",
    heading: "Next Steps",
    entries: [
      {
        title: "AI 메시지 보완",
        description:
          "로딩·재시도·이전 결과 유지 상태 선설계",
        result:
          "API 응답 실패 상황에서도 사용 흐름 유지",
      },
      {
        title: "AI 감정 해석 고도화",
        description:
          "키워드 중심 분석에서 문맥·감정 강도 기반 분석으로 확장",
        result:
          "세분화된 메시지와 테마 추천",
      },
      {
        title: "사용자 데이터 확장",
        description:
          "저장 구조와 확장 범위를 기획 초기 단계에서 정의",
        result:
          "로그인·DB 연동을 통한 기기 간 개인 설정 유지",
      },
    ],
  },
];

export default function AI_ProjectReview() {
  return (
    <section
      className="ai-project-review"
      aria-labelledby="ai-project-review-title"
    >
      {/* 페이지 타이틀 */}
      <h2
        id="ai-project-review-title"
        className="ai-project-review__title"
      >
        Project Review
      </h2>

      {/* 3개 컬럼 */}
      <div className="ai-project-review__columns">
        {reviewColumns.map((column) => (
          <div
            className={`ai-project-review__column ai-project-review__column--${column.id}`}
            key={column.id}
          >
            {/* 숫자 + 영문 제목 카드 */}
            <div className="ai-project-review__heading-card">
              <strong className="ai-project-review__number">
                {column.number}
              </strong>
              <h3>{column.heading}</h3>
            </div>

            {/* 컬럼별 3개 항목 */}
            <div className="ai-project-review__entries">
              {column.entries.map((entry) => (
                <article
                  className="ai-project-review__entry"
                  key={entry.title}
                >
                  <h4>{entry.title}</h4>

                  <p>
                    {entry.emphasized && (
                      <strong>{entry.emphasized}</strong>
                    )}

                    {entry.description}

                    {entry.result && (
                      <span className="ai-project-review__result">
                        <span className="ai-project-review__arrow">
                          →
                        </span>{" "}
                        <span>{entry.result}</span>
                      </span>
                    )}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

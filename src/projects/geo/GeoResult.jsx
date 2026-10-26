
import "./GeoResult.css";

const uxEffects = [
  {
    number: "1.",
    title: "클릭 전 이해",
    description:
      "대표 이미지와 요약 설명을 함께 제공해 사용자가 클릭 전 데이터 내용을 예측할 수 있음",
  },
  {
    number: "2.",
    title: "탐색 흐름 단축",
    description:
      "정보의 성격에 맞게 화면 배열을 정리해 원하는 데이터 및 서비스로 빠르게 이동할 수 있음",
  },
  {
    number: "3.",
    title: "선택 상태 인지",
    description:
      "버튼 반응을 명확히 보여 사용자가 선택 가능한 요소를 쉽게 인지할 수 있음",
  },
];

function GeoResult() {
  return (
    <section
      className="geo-result"
      aria-labelledby="geo-result-heading"
    >
      <h2
        id="geo-result-heading"
        className="geo-result__heading"
      >
        Result &amp; Review
      </h2>

      <div className="geo-result__inner">

        {/* 01. 정량적 기술 성과 */}
        <section className="geo-result__metrics">
          <h3 className="geo-result__section-title">
            01 정량적 기술 성과
            <span>: 웹 접근성 및 성능 지표</span>
          </h3>

          <div className="geo-result__metric-content">
            <div className="geo-result__score-image">
              <img
                src="/assets/geo/pf_pro1_result.png"
                alt="Lighthouse 측정 결과: 접근성 96점, Best Practices 81점, SEO 100점"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="geo-result__metric-caption">
              Chrome Lighthouse 접근성 테스트를 통해
              개선 화면의 웹접근성 점수 96점을 달성했습니다.
            </p>
          </div>
        </section>

        {/* 02. UX 기대 효과 */}
        <section className="geo-result__ux">
          <h3 className="geo-result__section-title">
            02 UX 기대 효과
          </h3>

          <div className="geo-result__ux-grid">
            {uxEffects.map((item) => (
              <article
                className="geo-result__ux-card"
                key={item.number}
              >
                <h4>
                  {item.number} {item.title}
                </h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <p className="geo-result__ux-conclusion">
            → 지리 데이터에 익숙하지 않은 사용자도 원하는
            데이터에 더 빠르게 접근할 수 있음
          </p>
        </section>

        {/* 03. Project Review */}
        <section className="geo-result__review">
          <h3 className="geo-result__section-title">
            03 Project Review
          </h3>

          <div className="geo-result__review-grid">

            <article className="geo-result__review-card geo-result__review-card--achievement">
              <h4>01 Achievements</h4>

              <h5>
                복잡한 정보를 탐색 흐름에 맞게 재구성
              </h5>

              <p>
                기존 화면은 성격이 다른 서비스가 유사한
                박스 형태로 반복되어, 사용자가 기능의 차이와
                다음 행동을 판단하기 어려웠습니다. 이를
                카드형·리스트형 UI로 구분하고 버튼 상태를
                명확하게 표현해,{" "}
                <strong>
                  정보의 성격과 탐색 경로가 화면에서
                  드러나도록 개선
                </strong>
                했습니다. 단순한 시각적 변경을 넘어{" "}
                <strong>
                  페르소나에서 정의한 불편을 화면 구조로
                  해결한 점
                </strong>
                이 가장 잘한 부분이라고 생각합니다.
              </p>
            </article>

            <article className="geo-result__review-card geo-result__review-card--limitation">
              <h4>02 Limitations</h4>

              <h5>
                화면 완성도에 비해 성능 최적화가 부족함
              </h5>

              <p>
                최종 Lighthouse 점검에서 Accessibility는
                96점을 기록했지만, Performance 74점과
                Best Practices 81점에서 보완이 필요했습니다.
                화면 디자인과 인터랙션 구현에 집중하면서{" "}
                <strong>
                  이미지 용량과 일부 웹 표준 항목을
                  제작 후반에 확인해 개선 범위가 커진 점이
                  아쉬웠습니다.
                </strong>{" "}
                또한 3D 아이콘을 적극적으로 사용하면서
                공공서비스의 신뢰감과 시각적 개성 사이의
                균형을 충분히 다듬지 못했습니다.
              </p>
            </article>

            <article className="geo-result__review-card geo-result__review-card--next">
              <h4>03 Next Steps</h4>

              <h5>
                성능 최적화를 제작 과정에 포함
              </h5>

              <p>
                다음 프로젝트부터는 디자인 시스템을 만들 때
                WCAG 색상 대비와 아이콘·텍스트의 비중을
                먼저 정의하고, 이미지 형식과 크기도
                개발 전에 규칙화할 계획입니다.{" "}
                <strong>
                  또한 구현 중간마다 Lighthouse를 점검해
                  WebP 변환과 리소스 최적화를 마지막 보완
                  작업이 아닌 기본 제작 과정으로
                  적용하겠습니다.
                </strong>
              </p>
            </article>

          </div>
        </section>
      </div>
    </section>
  );
}

export default GeoResult;

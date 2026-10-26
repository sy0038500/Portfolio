import { useEffect, useRef } from "react";
import "./P_Strategy.css";

const strategyRows = [
  {
    principle: "시선을 끊지 않는다.",
    problem:
      "제품 정보가 한번에 노출되면 화면 흐름이 단조로워짐",
    method: "Scroll Reveal",
    reason: (
      <>
        사용자의 <strong>읽는 속도</strong>에 맞춰
        제품특징과 라인업을 순차적으로 노출
      </>
    ),
  },
  {
    principle: "조작 가능한 요소를 명확히 한다",
    problem:
      "클릭 가능한 요소에 대한 시각적 단서가 부족하면, 사용자가 기능을 즉시 인지하기 어려움",
    method: "Custom Cursor & Hover",
    reason: (
      <>
        커서 확장과 카드 부유 효과로{" "}
        <strong>
          인터랙션 가능 영역을 명확히 전달
        </strong>
      </>
    ),
  },
  {
    principle: "행동의 결과를 보여준다",
    problem:
      "클릭 후 반응이 없으면, 사이트가 정적으로 느껴짐",
    method: "Click spark & Magnet Button",
    reason: (
      <>
        클릭과 접근 순간에 시각적 피드백을 제공해{" "}
        <strong>조작감을 강화</strong>
      </>
    ),
  },
  {
    principle: "탐색에 변화를 만든다",
    problem:
      "단일 제품 랜딩페이지는 이미지와 설명 반복으로 지루해질 수 있음",
    method: "Mouse Responsive Cards",
    reason: (
      <>
        마우스 움직임에 따라 카드가 재배치되며
        마지막 섹션의{" "}
        <strong>탐색 재미를 강화</strong>
      </>
    ),
  },
];

export default function P_Strategy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reveal = () =>
      section.classList.add("is-visible");

    if (
      !window.IntersectionObserver ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="p-strategy"
      aria-labelledby="p-strategy-title"
    >
      {/* 피그마 원본 배경 그래픽 */}
      <div
        className="p-strategy__decor"
        aria-hidden="true"
      >
        <img
          className="p-strategy__yellow"
          src="/assets/Power/P_StrategyYellow.svg"
          alt=""
        />

        <img
          className="p-strategy__red"
          src="/assets/Power/P_StrategyRed.svg"
          alt=""
        />

        {[1, 2, 3, 4, 5].map((number) => (
          <img
            key={number}
            className={`p-strategy__line p-strategy__line--${number}`}
            src="/assets/Power/P_StrategyLine.svg"
            alt=""
          />
        ))}
      </div>

      <p className="p-strategy__eyebrow">
        UX Strategy & Interaction
      </p>

      <h2
        className="p-strategy__title"
        id="p-strategy-title"
      >
        과한 애니메이션보다,
        <span>
          ‘반응하는 제품 탐색 흐름’을 설계했습니다.
        </span>
      </h2>

      {/* UX 전략 테이블 */}
      <table className="p-strategy__table">
        <colgroup>
          <col className="p-strategy__col-principle" />
          <col className="p-strategy__col-problem" />
          <col className="p-strategy__col-method" />
          <col className="p-strategy__col-reason" />
        </colgroup>

        <thead>
          <tr>
            <th scope="col">설계 원칙</th>
            <th scope="col">문제상황</th>
            <th scope="col">선택한 기법</th>
            <th scope="col">이유</th>
          </tr>
        </thead>

        <tbody>
          {strategyRows.map((row) => (
            <tr key={row.method}>
              <td>
                <span className="p-strategy__mobile-label">
                  설계 원칙
                </span>
                {row.principle}
              </td>

              <td>
                <span className="p-strategy__mobile-label">
                  문제상황
                </span>
                {row.problem}
              </td>

              <td className="p-strategy__method">
                <span className="p-strategy__mobile-label">
                  선택한 기법
                </span>
                {row.method}
              </td>

              <td>
                <span className="p-strategy__mobile-label">
                  이유
                </span>
                {row.reason}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

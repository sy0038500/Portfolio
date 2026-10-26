import { useEffect } from "react";
import "./GeoStrategy.css";

const strategies = [
  {
    id: "01",
    title: "선택 전 정보가 부족한 지도 서비스",
    image: "assets/geo/pf1_asto.png",
    alt: "국토정보플랫폼 서비스의 기존 화면과 카드형 UI 개선 화면 비교",
    problem:
      "항목명만으로는 어떤 데이터를 제공하는 서비스인지 판단하기 어려웠습니다.",
    why: "대표 이미지나 간단한 설명이 없어, 사용자가 내용을 확인하려면 각 항목을 직접 클릭해야 했습니다.",
    decision: (
      <>
        대표 이미지와 한 줄 설명을 포함한 <strong>카드형 UI</strong>로 재구성해,
        클릭하기 전에 서비스의 용도를 예측할 수 있도록 했습니다.
      </>
    ),
  },
  {
    id: "02",
    title: "서로 다른 정보가 비슷하게 보이는 구조",
    image: "assets/geo/pf1_asto2.png",
    alt: "국토정보플랫폼의 반복적인 정보 배열과 유형별 화면 구조 개선 비교",
    problem: "서비스들의 정보 간 차이와 우선순위를 구별하기 어려웠습니다.",
    why: "성격이 다른 콘텐츠가 비슷한 박스 형태와 배열로 반복되어, 각 정보의 역할이 화면에서 충분히 드러나지 않았습니다.",
    decision: (
      <>
        정보의 성격에 따라 카드·리스트·바로가기 구조로 구분해,{" "}
        <strong>각 정보의 역할과 탐색 흐름이 화면 내에서 구분</strong>
        되도록 재구성했습니다.
      </>
    ),
  },
  {
    id: "03",
    title: "버튼 반응 인지 어려움",
    image: "assets/geo/pf1_asto3.png",
    alt: "국토정보플랫폼의 기존 버튼과 상호작용 상태 개선 화면 비교",
    problem:
      "사용자가 클릭 가능한 요소와 현재 상태를 직관적으로 인지하기 어려웠습니다.",
    why: "버튼의 크기가 작고 Hover·Focus 상태의 시각적 변화가 약해, 다음 행동에 대한 확신을 주기 어려웠습니다.",
    decision: (
      <>
        버튼의 크기와 대비를 높이고 상태별 시각 피드백을 명확히 해,{" "}
        <strong>클릭 가능 여부와 현재 상태를 쉽게 판단</strong>할 수 있도록
        개선했습니다.
      </>
    ),
  },
];

function GeoStrategy() {
  useEffect(() => {
    const section = document.querySelector(".geo-strategy");

    if (!section) return;

    const cases = section.querySelectorAll(".geo-strategy__case");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    section.classList.add("geo-strategy--animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    cases.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      section.classList.remove("geo-strategy--animate");

      cases.forEach((item) => {
        item.classList.remove("is-visible");
      });
    };
  }, []);

  return (
    <section className="geo-strategy" aria-labelledby="geo-strategy-heading">
      <h2 id="geo-strategy-heading" className="geo-strategy__heading">
        UX Strategy
      </h2>

      <div className="geo-strategy__list">
        {strategies.map((strategy) => (
          <article className="geo-strategy__case" key={strategy.id}>
            <h3 className="geo-strategy__case-title">
              {strategy.id}. {strategy.title}
            </h3>

            <div className="geo-strategy__case-layout">
              {/* 왼쪽: 분석 및 개선 과정 */}
              <div className="geo-strategy__steps">
                <div className="geo-strategy__step">
                  <h4>Problem</h4>
                  <p>{strategy.problem}</p>
                </div>

                <div className="geo-strategy__step">
                  <h4>Why</h4>
                  <p>{strategy.why}</p>
                </div>

                <div className="geo-strategy__step">
                  <h4>Decision</h4>
                  <p>{strategy.decision}</p>
                </div>
              </div>

              {/* 오른쪽: 개선 전후 비교 이미지 */}
              <figure className="geo-strategy__visual">
                <img
                  src={strategy.image}
                  alt={strategy.alt}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default GeoStrategy;

import { useState } from "react";
import "./DUVI_UXStrategy.css";

const principles = [
  ["01. Overview First", "전체 현황을 먼저 파악"],
  ["02. Details on Demand", "선택한 정보만 상세하게"],
  ["03. Keep the Context", "탐색의 맥락을 유지"],
];

const states = [
  {
    no: "01",
    title: "Default",
    detail: "전체 지도 확인",
    image: "assets/DUVI/pro3_uxhypo1.png",
  },
  {
    no: "02",
    title: "Hover",
    detail: "영역 탐색",
    image: "assets/DUVI/inter1.png",
  },
  {
    no: "03",
    title: "Select",
    detail: "지역 선택",
    image: "assets/DUVI/inter2.png",
  },
];

export default function DUVI_UXStrategy() {
  const [selectedStep, setSelectedStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  const activeStep = hoveredStep ?? selectedStep;
  return (
    <section
      className="duvi-ux"
      aria-label="DUVI UX Strategy and Interaction Design"
    >
      <h2 className="duvi-ux__eyebrow">UX Strategy</h2>

      {/* UX Strategy: 전략 선택 + 노트북 목업 */}
      <div className="duvi-ux__hero">
        {/* 왼쪽: UX 전략 3개 */}
        <div className="duvi-ux__principles">
          {principles.map(([title, detail], index) => (
            <button
              type="button"
              key={title}
              className={`duvi-ux__principle-button ${
                selectedStep === index ? "is-selected" : ""
              }`}
              aria-pressed={selectedStep === index}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              onFocus={() => setHoveredStep(index)}
              onBlur={() => setHoveredStep(null)}
              onClick={() => setSelectedStep(index)}
            >
              <h3>{title}</h3>
              <p>{detail}</p>
            </button>
          ))}
          <p className="duvi-ux__hint">
            * 전략 항목에 마우스를 올리면 해당 영역이 강조되고, 클릭하면 선택
            상태가 유지됩니다.
          </p>
        </div>

        {/* 오른쪽: 노트북 목업 및 전략별 강조 */}
        <div className="duvi-ux__laptop" data-active={activeStep + 1}>
          {/* 기존 DUVI 노트북 목업 이미지 */}
          <img
            src="assets/DUVI/pf_pro4_uxhypomac@2x.png"
            alt="DUVI 웹서비스의 지도와 상세정보 화면"
            loading="lazy"
          />

          {/* 파란색 영역 테두리 */}
          <span
            className="duvi-ux__outline duvi-ux__outline--all"
            aria-hidden="true"
          />
          <span
            className="duvi-ux__outline duvi-ux__outline--map"
            aria-hidden="true"
          />
          <span
            className="duvi-ux__outline duvi-ux__outline--detail"
            aria-hidden="true"
          />

          {/* 01·02·03 번호 */}
          <span
            className="duvi-ux__marker duvi-ux__marker--first"
            aria-hidden="true"
          >
            01
          </span>

          <span
            className="duvi-ux__marker duvi-ux__marker--second"
            aria-hidden="true"
          >
            02
          </span>

          <span
            className="duvi-ux__marker duvi-ux__marker--third"
            aria-hidden="true"
          >
            03
          </span>
        </div>
      </div>

      <div className="duvi-ux__interaction-heading">
        <h2>Interaction Design</h2>
        <p>
          사용자의 행동에 즉각적인 시각적 피드백을 제공해 탐색 가능성과 현재
          선택 상태를 명확하게 전달했습니다.
        </p>
      </div>
      <div className="duvi-ux__states">
        {states.map((s) => (
          <article
            className={`duvi-ux__state duvi-ux__state--${s.no}`}
            key={s.no}
          >
            <h3>
              {s.no} {s.title}
            </h3>
            <p>{s.detail}</p>
            <div className="duvi-ux__state-image">
              <img src={s.image} alt={`${s.title} 지도 상태`} loading="lazy" />
            </div>
          </article>
        ))}
        <article className="duvi-ux__state duvi-ux__state--04">
          <h3>04 Update</h3>
          <p>상세정보 갱신</p>
          <div className="duvi-ux__state-image duvi-ux__state-image--update">
            <img
              src="assets/DUVI/inter3.png"
              alt="강남구 논현1동의 DUVI Score 28.73 및 2등급 상세 패널"
              loading="lazy"
            />
          </div>
        </article>
      </div>
    </section>
  );
}

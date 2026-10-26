import { useEffect, useRef, useState } from "react";
import CustomCursor from "./CustomCursor";
import "./P_Showcase.css";

const interactions = [
  {
    id: "scroll",
    name: "Scroll Reveal",
    gif: "assets/Power/pf_pro2_gif1.gif",
    imageClass: "p-showcase__media--first",
    reverse: false,
    trigger: "사용자가 페이지를 스크롤",
    effect:
      "상단 게이지가 진행도를 표시하고, 섹션의 텍스트와 카드가 순차적으로 등장",
    role: "페이지 진행 상태를 보여주고, 정보를 읽는 순서에 맞춰 자연스럽게 시선 유도",
  },
  {
    id: "hover",
    name: "Custom Cursor & Hover",
    gif: "assets/Power/pf_pro2_gif2.gif",
    imageClass: "p-showcase__media--second",
    reverse: true,
    trigger: "사용자가 버튼 또는 카드에 마우스를 올림",
    effect: "커서가 확장되고, 카드가 떠오르며 테두리와 그림자가 변화",
    role: "클릭 가능한 요소를 시각적으로 명확히 전달하고, 사용자의 조작 가능성을 높임",
  },
  {
    id: "click",
    name: "Click Spark & Magnet Button",
    gif: "assets/Power/pr_pro2_gif3.gif",
    imageClass: "p-showcase__media--third",
    reverse: false,
    trigger: "사용자가 CTA 버튼에 접근하거나 클릭",
    effect: "버튼이 마우스 방향으로 살짝 끌려오고, 클릭 시 스파크 효과 발생",
    role: "주요 버튼의 주목도를 높이고, 클릭 행동에 즉각적인 피드백을 제공",
  },
  {
    id: "cards",
    name: "Mouse Responsive Cards",
    gif: "assets/Power/pf_pro2_gif4.gif",
    imageClass: "p-showcase__media--fourth",
    reverse: true,
    trigger: "사용자가 마지막 섹션 카드 영역에서 마우스를 움직임",
    effect:
      "Product Features / Why Retro Cell / Product Lineup 카드가 지정된 영역 안에서 랜덤하게 재배치",
    role: "마지막 섹션을 단순한 마무리가 아닌 재탐색 가능한 인터랙티브 메뉴로 구성",
  },
];

export default function P_Showcase() {
  const sectionRef = useRef(null);
  const dialogRef = useRef(null);

  const [activeStep, setActiveStep] = useState("");
  const [preview, setPreview] = useState(null);

  // 01. 스크롤 진입 시 각 행 등장
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rows = section.querySelectorAll(".p-showcase__row");

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    rows.forEach((row) => {
      row.classList.add("is-preparing");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("is-preparing");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    rows.forEach((row) => {
      observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

  // 02. 설명 단계 선택
  const handleStep = (id, step) => {
    const selected = `${id}-${step}`;

    setActiveStep((current) => (current === selected ? "" : selected));
  };

  // 03. GIF 확대 팝업
  const openPreview = (item) => {
    setPreview(item);
    dialogRef.current?.showModal();
  };

  const closePreview = () => {
    dialogRef.current?.close();
  };

  return (
    <section
      ref={sectionRef}
      className="p-showcase"
      aria-labelledby="p-showcase-title"
    >
      <h2 id="p-showcase-title" className="p-showcase__title">
        KEY Interactions
      </h2>

      <div className="p-showcase__list">
        {interactions.map((item) => (
          <article
            key={item.id}
            className={`
              p-showcase__row
              ${item.reverse ? "p-showcase__row--reverse" : ""}
              ${activeStep.startsWith(`${item.id}-`) ? "is-exploring" : ""}
            `}
          >
            {/* Trigger / Effect / UX Role */}
            <div className="p-showcase__description">
              <div
                className={`p-showcase__info ${
                  activeStep === `${item.id}-trigger` ? "is-active" : ""
                }`}
              >
                <button
                  type="button"
                  className="p-showcase__info-title"
                  aria-pressed={activeStep === `${item.id}-trigger`}
                  onClick={() => handleStep(item.id, "trigger")}
                >
                  Trigger
                </button>

                <p>{item.trigger}</p>
              </div>

              <div
                className="p-showcase__arrow p-showcase__arrow--yellow"
                aria-hidden="true"
              />

              <div
                className={`p-showcase__info ${
                  activeStep === `${item.id}-effect` ? "is-active" : ""
                }`}
              >
                <button
                  type="button"
                  className="p-showcase__info-title"
                  aria-pressed={activeStep === `${item.id}-effect`}
                  onClick={() => handleStep(item.id, "effect")}
                >
                  Effect
                </button>

                <p>{item.effect}</p>
              </div>

              <div
                className="p-showcase__arrow p-showcase__arrow--red"
                aria-hidden="true"
              />

              <div
                className={`p-showcase__info ${
                  activeStep === `${item.id}-role` ? "is-active" : ""
                }`}
              >
                <button
                  type="button"
                  className="p-showcase__info-title"
                  aria-pressed={activeStep === `${item.id}-role`}
                  onClick={() => handleStep(item.id, "role")}
                >
                  UX Role
                </button>

                <p>{item.role}</p>
              </div>
            </div>

            {/* 클릭 가능한 GIF 프레임 */}
            <button
              type="button"
              className={`
                p-showcase__media
                ${item.imageClass}
              `}
              onClick={() => openPreview(item)}
              aria-label={`${item.name} GIF 확대 보기`}
            >
              <img
                src={item.gif}
                alt={`${item.name} 인터랙션 시연`}
                loading="lazy"
              />

              <span className="p-showcase__expand">
                <span aria-hidden="true">↗</span>
                VIEW GIF
              </span>
            </button>
          </article>
        ))}
      </div>

      {/* GIF 확대 팝업 */}
      <dialog
        ref={dialogRef}
        className="p-showcase__dialog"
        onClose={() => setPreview(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closePreview();
          }
        }}
        aria-label="인터랙션 GIF 확대 보기"
      >
        {/* 팝업 최상위 레이어 안에서 커스텀 커서 표시 */}
        {preview && <CustomCursor />}

        <div className="p-showcase__dialog-inner">
          <div className="p-showcase__dialog-top">
            <strong>{preview?.name}</strong>

            <button
              type="button"
              className="p-showcase__close"
              onClick={closePreview}
            >
              CLOSE <span aria-hidden="true">×</span>
            </button>
          </div>

          {/* 기존 GIF 프레임 디자인 그대로 사용 */}
          {preview && (
            <div className={`p-showcase__dialog-preview ${preview.imageClass}`}>
              <img
                className="p-showcase__dialog-image"
                src={preview.gif}
                alt={`${preview.name} 확대 시연`}
              />
            </div>
          )}
        </div>
      </dialog>
    </section>
  );
}

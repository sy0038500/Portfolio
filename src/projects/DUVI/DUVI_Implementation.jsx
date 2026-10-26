import { useEffect, useRef, useState } from "react";
import "./DUVI_Implementation.css";

/* DUVI 10 — Implementation */
const implementations = [
  {
    number: "01",
    title: "SEMANTIC MARKUP",
    subtitle: "콘텐츠 역할에 따른 구조화",
    image: "/assets/DUVI/pro4_imple1.png",
    alt: "React에서 main, section, aside 등을 사용한 시맨틱 마크업 코드",
    description:
      "화면을 역할별 React 컴포넌트로 분리하고, 각 컴포넌트의 JSX 내부에 시맨틱 HTML 태그를 적용해 주요 화면 영역과 정보의 관계가 코드 구조에서도 드러나도록 구성했습니다.",
    keywords: "HTML5 · STRUCTURE · REUSABLE UI",
  },
  {
    number: "02",
    title: "RESPONSIVE UI",
    subtitle: "화면 크기에 유연하게 대응",
    image: "/assets/DUVI/pro4_imple2.png",
    alt: "DUVI 모바일 미디어쿼리와 CSS Grid 반응형 코드",
    description:
      "CSS Grid와 미디어쿼리를 활용해 데스크톱의 다단 레이아웃을 모바일에서 단일 열로 재배치했습니다. 메인 타이틀에는 clamp()를 적용해 화면 너비에 따라 글자 크기가 유동적으로 변화하도록 구현했습니다.",
    keywords: "CSS GRID · MEDIA QUERY · CLAMP()",
  },
  {
    number: "03",
    title: "MAP INTERACTION",
    subtitle: "사용자 선택에 반응하는 지도",
    image: "/assets/DUVI/pro4_imple3.png",
    alt: "Leaflet의 click, mouseover, mouseout 이벤트 처리 코드",
    description:
      "Leaflet의 click, mouseover, mouseout 이벤트를 활용해 Hover와 Selected 상태를 구현하고, 선택한 행정동이 유지되도록 지도 레이어의 스타일과 상태를 제어했습니다.",
    keywords: "LEAFLET · HOVER · CLICK · SELECTED",
  },
];

export default function DUVI_Implementation() {
  const [activeIndex, setActiveIndex] = useState(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const openerRef = useRef(null);

  /* 팝업 활성화 및 배경 스크롤 잠금 */
  useEffect(() => {
    if (activeIndex === null) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (!dialog.open) dialog.showModal();
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [activeIndex]);

  /* 이미지 선택 시 팝업 열기 */
  function openImage(index, event) {
    openerRef.current = event.currentTarget;
    setActiveIndex(index);
  }

  /* X 버튼 / 배경 클릭 시 닫기 */
  function closeImage() {
    dialogRef.current?.close();
  }

  /* 팝업 종료 후 원래 이미지 버튼으로 포커스 복귀 */
  function handleDialogClose() {
    setActiveIndex(null);
    openerRef.current?.focus();
  }

  const activeItem = activeIndex === null ? null : implementations[activeIndex];

  return (
    <section
      className="duvi-implementation"
      aria-labelledby="duvi-implementation-title"
    >
      <div className="duvi-implementation__inner">
        {/* 01. 좌측 상단 페이지 제목 */}
        <h2
          id="duvi-implementation-title"
          className="duvi-implementation__eyebrow"
        >
          Implementation
        </h2>

        {/* 02. 구현 개요 */}
        <div className="duvi-implementation__intro">
          <p>
            React 기반으로 화면을 역할별 컴포넌트로 분리하고, 각 컴포넌트
            내부에는 main, section, aside 등 시맨틱 태그를 적용해 정보 구조를
            명확하게 구성했습니다.
          </p>
          <p>
            CSS Grid와 미디어쿼리를 활용해 반응형 레이아웃을 구현하고, Leaflet과
            GeoJSON을 연동해 행정동별 지도 시각화와 Hover·Selected 인터랙션을
            완성했습니다.
          </p>
          <p>
            생성형 AI는 코드 구조화와 오류 해결을 위한 보조 도구로 활용했으며,
            결과 코드는 직접 실행·검수·수정해 배포했습니다.
          </p>
        </div>

        {/* 03. Implementation 카드 3개 */}
        <div className="duvi-implementation__grid">
          {implementations.map((item, index) => (
            <article className="duvi-implementation__card" key={item.number}>
              {/* 카드 제목 및 부제 */}
              <header className="duvi-implementation__card-head">
                <h3 className="duvi-implementation__card-title">
                  <span>{item.number}</span>
                  <span>{item.title}</span>
                </h3>

                <p className="duvi-implementation__card-subtitle">
                  {item.subtitle}
                </p>
              </header>

              {/* 이미지 클릭 시 확대 팝업 */}
              <button
                type="button"
                className={`duvi-implementation__image-button duvi-implementation__image-button--${item.number}`}
                onClick={(event) => openImage(index, event)}
                aria-haspopup="dialog"
                aria-label={`${item.number} ${item.title} 코드 이미지 크게 보기`}
                title="이미지를 크게 보기"
              >
                <img src={item.image} alt="" loading="lazy" decoding="async" />

                <span
                  className="duvi-implementation__zoom-label"
                  aria-hidden="true"
                >
                  확대 보기 +
                </span>
              </button>

              {/* 구현 설명 */}
              <p className="duvi-implementation__description">
                {item.description}
              </p>

              {/* 사용 기술 */}
              <p className="duvi-implementation__keywords">{item.keywords}</p>
            </article>
          ))}
        </div>
      </div>

      {/* 04. 이미지 확대 팝업 */}
      <dialog
        ref={dialogRef}
        className="duvi-implementation__dialog"
        aria-labelledby="duvi-implementation-dialog-title"
        onClose={handleDialogClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeImage();
          }
        }}
      >
        {activeItem && (
          <div className="duvi-implementation__dialog-content">
            <div className="duvi-implementation__dialog-header">
              <h2 id="duvi-implementation-dialog-title">
                {activeItem.number} {activeItem.title}
              </h2>

              {/* X 닫기 버튼 */}
              <button
                type="button"
                ref={closeButtonRef}
                className="duvi-implementation__close"
                onClick={closeImage}
                aria-label="확대 이미지 닫기"
                title="닫기 (Esc)"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            {/* 확대 이미지 — 크롭 없이 원본 전체 표시 */}
            <img
              className="duvi-implementation__dialog-image"
              src={activeItem.image}
              alt={activeItem.alt}
            />
          </div>
        )}
      </dialog>
    </section>
  );
}

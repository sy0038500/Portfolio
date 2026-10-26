import { useEffect, useRef, useState } from "react";
import "./HAVEN_Page.css";

const PANEL_SRC = "/assets/Urban/HAVEN_Panel.png";

const approachItems = [
  {
    number: "01",
    title: "Site Analysis",
    description:
      "남해군의 인구·산업·주거·교통·생활시설 분포를 분석해 지역별 생활환경과 접근성의 차이를 파악했습니다.",
  },
  {
    number: "02",
    title: "Issue",
    description:
      "개발 가용지 부족, 지역 간 생활 인프라 격차, 산업 기반 부족을 핵심 과제로 도출하고 지역 거점 간 기능 연계의 필요성을 확인했습니다.",
  },
  {
    number: "03",
    title: "Concept",
    description:
      "청년·중장년·노년을 아우르는 포용도시를 목표로 사회·경제·공간·환경의 네 가지 기준을 설정하고, 지역 거점과 연결축을 중심으로 공간전략을 제안했습니다.",
  },
];

export default function HAVEN_Page() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const pageRef = useRef(null);
  const dialogRef = useRef(null);
  const openerRef = useRef(null);
  const closeRef = useRef(null);

  // 스크롤 진입 시 부드럽게 나타남: 기본 상태에서는 항상 내용이 보임.
  useEffect(() => {
    const root = pageRef.current;
    if (!root || !("IntersectionObserver" in window)) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    root.querySelectorAll("[data-haven-reveal]").forEach((node) => {
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  // 네이티브 dialog: ESC 닫기, 포커스 복귀, 팝업 중 본문 스크롤 잠금.
  useEffect(() => {
    if (!isPreviewOpen) return undefined;

    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [isPreviewOpen]);

  function closePreview() {
    if (dialogRef.current?.open) dialogRef.current.close();
    else setIsPreviewOpen(false);
  }

  function handleDialogClose() {
    setIsPreviewOpen(false);
    requestAnimationFrame(() => openerRef.current?.focus());
  }

  return (
    <main ref={pageRef} className="haven-page" aria-labelledby="haven-project-title">
      {/* 모든 화면에서 독립된 좌측 상단 타이틀: 사월마을·김해와 같은 규격 */}
      <p className="haven-page__eyebrow">URBAN PROJECT - 03</p>

      <div className="haven-page__container">
        {/* 왼쪽: 프로젝트 설명과 기여도 */}
        <div className="haven-page__content">
          <header className="haven-page__intro">
            <h1 id="haven-project-title">HAVEN</h1>
            <p className="haven-page__subtitle">남해, 포용도시를 위한 공간계획</p>
            <p className="haven-page__meta">
              경상남도 남해군 · Urban Design Studio / PROJECT YEAR 2024
            </p>
          </header>

          <section className="haven-page__section haven-page__overview" aria-labelledby="haven-overview-title">
            <h2 id="haven-overview-title">PROJECT OVERVIEW</h2>
            <p>
              남해군의 인구·산업·주거·생활환경 등 지역 현황을 분석하고,
              세대와 지역 간 격차를 완화하기 위한 포용도시(Inclusive City)
              전략을 제안한 도시계획 프로젝트
            </p>
          </section>

          <section className="haven-page__section haven-page__approach" aria-labelledby="haven-approach-title">
            <h2 id="haven-approach-title">DESIGN APPROACH</h2>
            <div className="haven-page__approach-list">
              {approachItems.map((item) => (
                <article
                  key={item.number}
                  className="haven-page__approach-row"
                  data-haven-reveal
                >
                  <span className="haven-page__step-number" aria-hidden="true">
                    {item.number}
                  </span>
                  <div className="haven-page__approach-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            className="haven-page__contribution"
            aria-labelledby="haven-contribution-title"
            data-haven-reveal
          >
            <h2 id="haven-contribution-title">
              MY CONTRIBUTION <small>- 4인 팀 프로젝트</small>
            </h2>
            <span className="haven-page__contribution-accent" aria-hidden="true" />
            <div className="haven-page__contribution-grid">
              <div>
                <h3>01 설계 자료 시각화</h3>
                <p>분석·설계 다이어그램 제작 및 설명 구성</p>
              </div>
              <div>
                <h3>02 최종 패널 편집</h3>
                <p>팀원별 결과물 취합 및 전체 레이아웃 통합</p>
              </div>
            </div>
            <p className="haven-page__contribution-note">
              공간계획 공동 기획 · QGIS 캡처, Detailed Spatial Plan 및 Detail View 3D 이미지는 팀원 담당
            </p>
          </section>
        </div>

        {/* 오른쪽: 데스크탑 고정 2열 / 태블릿·모바일에서는 맨 마지막 */}
        <aside className="haven-page__panel" aria-label="HAVEN 최종 디자인 패널">
          <figure className="haven-page__figure">
            <figcaption>FINAL DESIGN</figcaption>
            <button
              ref={openerRef}
              className="haven-page__panel-button"
              type="button"
              aria-label="HAVEN 도시계획 최종 패널 크게 보기"
              onClick={() => setIsPreviewOpen(true)}
            >
              <img
                src={PANEL_SRC}
                alt="남해 HAVEN 포용도시 도시계획 최종 디자인 패널"
                loading="eager"
                decoding="async"
              />
              <span className="haven-page__zoom-label" aria-hidden="true">
                ↗ 크게 보기
              </span>
            </button>
          </figure>
        </aside>
      </div>

      <dialog
        ref={dialogRef}
        className="haven-page__lightbox"
        aria-label="HAVEN FINAL DESIGN 원본 확대"
        onClose={handleDialogClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) closePreview();
        }}
      >
        <div className="haven-page__lightbox-content">
          <div className="haven-page__lightbox-toolbar">
            <strong>FINAL DESIGN</strong>
            <button
              ref={closeRef}
              className="haven-page__lightbox-close"
              type="button"
              aria-label="이미지 확대 닫기"
              onClick={closePreview}
            >
              ×
            </button>
          </div>
          <img src={PANEL_SRC} alt="HAVEN 최종 패널 확대 이미지" />
        </div>
      </dialog>
    </main>
  );
}

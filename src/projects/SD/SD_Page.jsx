import { useEffect, useRef, useState } from "react";
import "./SD_Page.css";

const PANEL_SRC = "/assets/Urban/SD_Panel.png";

const approachItems = [
  {
    number: "01",
    heading: "Site Analysis",
    description:
      "송도국제도시의 계획 변화와 현 토지이용 현황을 분석하고, 기존 공간 구조와 주요 시설 배치의 한계를 파악했습니다.",
  },
  {
    number: "02",
    heading: "Issue",
    description:
      "단일 상징축 체계와 부적절한 토지이용계획을 핵심 문제로 도출하고, 도시 기능과 생활권을 유기적으로 연결할 필요성을 확인했습니다.",
  },
  {
    number: "03",
    heading: "Concept",
    description:
      "가온로·너울로·난새로의 다축 체계를 제안하고, 각 축의 기능을 재설정한 새로운 토지이용계획으로 도시 활력 증진을 도모했습니다.",
  },
];

const strategyItems = [
  {
    number: "01",
    name: "가온로",
    keyword: "CULTURE & TOURISM",
    description:
      "송도 중심부를 문화·관광의 거점으로 설정하고, 도시의 중심 기능을 강화하는 축",
  },
  {
    number: "02",
    name: "너울로",
    keyword: "EDUCATION & YOUTH",
    description:
      "대학과 학생들의 활동을 중심으로 교육·청년의 미래를 연결하는 공간축",
  },
  {
    number: "03",
    name: "난새로",
    keyword: "INTERNATIONAL BUSINESS",
    description:
      "고층 랜드마크와 국제업무 기능을 중심으로 송도의 상징성과 업무 활력을 강화하는 축",
  },
];

export default function SD_Page() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const pageRef = useRef(null);
  const dialogRef = useRef(null);
  const openerRef = useRef(null);
  const closeRef = useRef(null);

  // 스크롤 진입 시 자연스럽게 등장. 관측 실패 시에도 기본 콘텐츠는 항상 보임.
  useEffect(() => {
    const root = pageRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return undefined;

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

    root.querySelectorAll("[data-sd-reveal]").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // 이미지 팝업: 배경 스크롤 방지 + 네이티브 ESC 닫기.
  useEffect(() => {
    if (!isPreviewOpen) return undefined;
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
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
    <main ref={pageRef} className="sd-page" aria-labelledby="sd-project-title">
      {/* 섹션 전체 좌상단 고정 규격: WELL / KH / HAVEN과 일치 */}
      <p className="sd-page__eyebrow">URBAN PROJECT - 04</p>

      <div className="sd-page__container">
        <header className="sd-page__intro">
          <div className="sd-page__intro-accent">
            <h1 id="sd-project-title">
              <span className="sd-page__title-first">선으로 엮은 활기,</span>
              <span className="sd-page__title-main">송도를 다시 쓰다.</span>
            </h1>
            <p className="sd-page__meta">
              송도국제도시 · Urban Design Studio / PROJECT YEAR 2023
            </p>
          </div>
        </header>

        <section
          className="sd-page__overview"
          aria-labelledby="sd-overview-title"
          data-sd-reveal
        >
          <h2 id="sd-overview-title">PROJECT OVERVIEW</h2>
          <p>
            기존 송도국제도시의 단일 상징축 체계와 비효율적인 토지이용을
            분석하고, 세 개의 특성화된 축과 새로운 공간 구조를 통해 도시 활력을
            재구성한 도시설계 프로젝트
          </p>
        </section>

        <div className="sd-page__layout">
          <section
            className="sd-page__approach"
            aria-labelledby="sd-approach-title"
          >
            <h2 id="sd-approach-title">DESIGN APPROACH</h2>
            <div className="sd-page__approach-list">
              {approachItems.map((item) => (
                <article
                  key={item.number}
                  className="sd-page__approach-row"
                  data-sd-reveal
                >
                  <span className="sd-page__approach-number" aria-hidden="true">
                    {item.number}
                  </span>
                  <div className="sd-page__approach-copy">
                    <h3>{item.heading}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <figure className="sd-page__panel" data-sd-reveal>
            <figcaption className="sd-page__panel-caption">
              FINAL DESIGN
            </figcaption>
            <button
              ref={openerRef}
              type="button"
              className="sd-page__panel-button"
              aria-label="송도 최종 디자인 패널 크게 보기"
              onClick={() => setIsPreviewOpen(true)}
            >
              <img
                src={PANEL_SRC}
                alt="송도 도시설계 마스터플랜과 공간계획을 담은 최종 패널"
                loading="eager"
                decoding="async"
              />
              <span className="sd-page__zoom-label" aria-hidden="true">
                ↗ 크게 보기
              </span>
            </button>
          </figure>

          <div className="sd-page__right">
            <section
              className="sd-page__strategy"
              aria-labelledby="sd-strategy-title"
            >
              <h2 id="sd-strategy-title">SPATIAL STRATEGY</h2>
              <div className="sd-page__strategy-list">
                {strategyItems.map((item) => (
                  <article
                    key={item.number}
                    className="sd-page__strategy-row"
                    data-sd-reveal
                  >
                    <span
                      className="sd-page__strategy-number"
                      aria-hidden="true"
                    >
                      {item.number}
                    </span>
                    <div>
                      <div className="sd-page__strategy-heading">
                        <h3>{item.name}</h3>
                        <span>{item.keyword}</span>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section
              className="sd-page__contribution"
              aria-labelledby="sd-contribution-title"
              data-sd-reveal
            >
              <h2 id="sd-contribution-title">
                MY CONTRIBUTION <small>- 2인 팀 프로젝트</small>
              </h2>
              <span className="sd-page__contribution-rule" aria-hidden="true" />
              <div className="sd-page__contribution-item">
                <h3>01 마스터플랜 제작</h3>
                <p>다축 공간체계와 토지이용계획을 반영한 마스터플랜 제작</p>
              </div>
              <div className="sd-page__contribution-item">
                <h3>02 공동 분석 및 설계</h3>
                <p>현황 분석·문제 도출·축별 전략 및 패널 구성 공동 진행</p>
              </div>
              <p className="sd-page__contribution-note">
                조감도 제작은 팀원 담당
              </p>
            </section>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="sd-page__lightbox"
        aria-label="송도 FINAL DESIGN 원본 확대"
        onClose={handleDialogClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) closePreview();
        }}
      >
        <div className="sd-page__lightbox-content">
          <div className="sd-page__lightbox-toolbar">
            <strong>FINAL DESIGN</strong>
            <button
              ref={closeRef}
              type="button"
              className="sd-page__lightbox-close"
              aria-label="이미지 확대 닫기"
              onClick={closePreview}
            >
              ×
            </button>
          </div>
          <img src={PANEL_SRC} alt="송도 도시설계 최종 패널 확대 이미지" />
        </div>
      </dialog>
    </main>
  );
}

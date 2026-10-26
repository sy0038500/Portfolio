import { useEffect, useRef, useState } from "react";
import "./KH_Page.css";

const PANEL_SRC = "assets/Urban/KH_Panel.png";

const approachItems = [
  {
    number: "01",
    title: "Site Analysis",
    description:
      "금관가야의 역사가 담긴 대성동 고분군 주변을 역사 유적의 가치를 보존하면서도 사람들이 문화를 경험할 수 있는 공간으로 주목했습니다.",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "금관가야의 역사적 상징과 현대적인 조명 기술을 결합해, 과거와 현재가 공존하는 야간경관을 구상했습니다.",
  },
  {
    number: "03",
    title: "Experience Design",
    description:
      "인터랙티브 영상조명과 역사적 문양을 활용해 연령에 관계없는 체험과 쾌적한 산책로를 함께 계획해 문화적 경험과 야간 보행환경을 고려했습니다.",
  },
];

export default function KH_Page() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const openerRef = useRef(null);

  // 패널 확대: 열릴 때 본문 스크롤 잠금, 닫힐 때 복구
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

  const closePreview = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
    else setIsPreviewOpen(false);
  };

  const handleDialogClose = () => {
    setIsPreviewOpen(false);
    requestAnimationFrame(() => openerRef.current?.focus());
  };

  return (
    <main className="kh-page" aria-label="김해 대성동 고분군 야간경관 디자인 프로젝트">
      {/* 프로젝트 번호: 패널과 무관한 페이지 전체 좌상단 제목 */}
      <p className="kh-page__eyebrow">URBAN PROJECT - 02</p>

      <div className="kh-page__container">

        {/* 왼쪽: 최종 디자인 패널 */}
        <aside className="kh-page__left" aria-label="최종 디자인 패널">
          <figure className="kh-page__figure">
            <figcaption>FINAL DESIGN</figcaption>
            <button
              type="button"
              className="kh-page__panel-button"
              ref={openerRef}
              aria-label="김해 야간경관 최종 디자인 패널 크게 보기"
              onClick={() => setIsPreviewOpen(true)}
            >
              <img
                src={PANEL_SRC}
                alt="김해 대성동 고분군 야간경관 도시설계 최종 패널"
                loading="eager"
                decoding="async"
              />
              <span className="kh-page__zoom-label" aria-hidden="true">
                <span>↗</span> 크게 보기
              </span>
            </button>
          </figure>
        </aside>

        {/* 오른쪽: 프로젝트 설명 */}
        <div className="kh-page__right">
          <header className="kh-page__intro">
            <h1>
              <span className="kh-page__name">“김해”</span>{" "}
              <span className="kh-page__tagline">가야의 빛이 쉬어가는 공간</span>
            </h1>
            <p className="kh-page__meta">김해시 대성동 고분군 일대 · 야간경관 디자인 · Award</p>
            <p className="kh-page__year">PROJECT YEAR 2024</p>
          </header>

          <section className="kh-page__card kh-page__overview" aria-labelledby="kh-overview-title">
            <h2 id="kh-overview-title">PROJECT OVERVIEW</h2>
            <p>
              금관가야의 역사와 현대적 조명 기술을 결합해, 주민과 방문객 모두
              체험을 통해 역사를 친숙하게 접할 수 있도록 야간경관을 제안한 프로젝트
            </p>
          </section>

          <section className="kh-page__card kh-page__approach" aria-labelledby="kh-approach-title">
            <h2 id="kh-approach-title">DESIGN APPROACH</h2>
            <div className="kh-page__approach-list">
              {approachItems.map((item) => (
                <div className="kh-page__approach-row" key={item.number}>
                  <span className="kh-page__step-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="kh-page__card kh-page__contribution" aria-labelledby="kh-contribution-title">
            <h2 id="kh-contribution-title">
              MY CONTRIBUTION <small>- 3인 팀 프로젝트</small>
            </h2>
            <p>
              대상지 분석과 야간경관 콘셉트 기획, 인터랙티브 영상조명 및 가야 문양 조명시설 디자인,
              조명 배치계획과 최종 패널 제작 등 전반적인 설계·디자인 작업을 주도했습니다.
            </p>
            <p>투시도 및 조명 3D 모델링은 다른 팀원이 담당하였습니다.</p>
          </section>

          <section className="kh-page__card kh-page__achievement" aria-labelledby="kh-achievement-title">
            <h2 id="kh-achievement-title">ACHIEVEMENT</h2>
            <p>
              2024.09.
              <span>제22회 김해시 도시경관디자인 작품공모전 장려상 수상</span>
            </p>
          </section>

          <section className="kh-page__card kh-page__review" aria-labelledby="kh-review-title">
            <h2 id="kh-review-title">REVIEW</h2>
            <p>
              금관가야의 역사를 간직한 대성동 고분군이 단순히 과거의 흔적을 보존하는 장소를 넘어,
              사람들이 자연스럽게 방문하고 문화를 경험하는 공간이 되기를 바랐습니다.
            </p>
            <p>
              역사적 장소의 정체성을 유지하면서 현대적인 조명 기술을 결합하는 방법을 고민했습니다.
              특히 인터랙티브 영상조명을 통해 다양한 연령층이 역사와 친숙해질 수 있도록 하고,
              쾌적한 산책로를 함께 고려해 체험과 안전이 공존하는 야간경관을 제안하고자 했습니다.
            </p>
            <p>
              이 프로젝트를 통해 역사적 가치를 현대적인 방식으로 전달하는 것뿐 아니라,{
                " "
              }
              <strong>공간의 정체성·심미성·이용자의 경험을 함께 고려하는 설계의 중요성</strong>을
              생각하게 되었습니다.
            </p>
          </section>
        </div>
      </div>

      {/* 패널 전체보기: ESC / X / 바깥 클릭으로 닫기 */}
      <dialog
        ref={dialogRef}
        className="kh-page__lightbox"
        aria-label="김해 야간경관 최종 디자인 패널 확대"
        onClose={handleDialogClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) closePreview();
        }}
      >
        <div className="kh-page__lightbox-content">
          <div className="kh-page__lightbox-toolbar">
            <strong>FINAL DESIGN</strong>
            <button
              type="button"
              ref={closeRef}
              className="kh-page__lightbox-close"
              onClick={closePreview}
              aria-label="패널 확대 보기 닫기"
            >
              ×
            </button>
          </div>
          <img src={PANEL_SRC} alt="김해 야간경관 최종 디자인 패널 전체" />
        </div>
      </dialog>
    </main>
  );
}

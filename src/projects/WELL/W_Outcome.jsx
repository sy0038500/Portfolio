import { useEffect, useRef } from "react";
import "./W_Outcome.css";

const contributions = [
  {
    number: "01",
    title: "도시계획 및 컨셉 기획",
    description: "전체 도시계획 방향과 공간 설계 아이디어 도출에 공동 참여",
  },
  {
    number: "02",
    title: "마스터플랜 제작",
    description: "설계안 내용을 공간적으로 구체화한 마스터플랜 제작 담당",
  },
  {
    number: "03",
    title: "세부 설계 및 패널 구성",
    description: "세부 설계 요소 절반 작업, 팀원들의 분석 자료 취합 및 최종 패널 편집 참여",
  },
];

export default function W_Outcome({ onPreview }) {
  const timelineRef = useRef(null);
  const reviewRef = useRef(null);

  // 연혁: 두 원의 실제 중심을 연결하고 스크롤에 맞춰 선을 연속적으로 채움
  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return undefined;

    const firstDot = timeline.querySelector(
      ".w-outcome__milestone--first .w-outcome__timeline-dot"
    );
    const secondDot = timeline.querySelector(
      ".w-outcome__milestone--second .w-outcome__timeline-dot"
    );
    if (!firstDot || !secondDot) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let frame = 0;

    const update = () => {
      frame = 0;

      const box = timeline.getBoundingClientRect();
      const first = firstDot.getBoundingClientRect();
      const second = secondDot.getBoundingClientRect();
      const firstCenter = first.top + first.height / 2;
      const secondCenter = second.top + second.height / 2;

      // CSS의 임의 top/bottom 대신 원 중심끼리 정확히 연결
      timeline.style.setProperty(
        "--w-timeline-top", `${(firstCenter - box.top).toFixed(2)}px`
      );
      timeline.style.setProperty(
        "--w-timeline-length", `${Math.max(0, secondCenter - firstCenter).toFixed(2)}px`
      );

      // 첫 원이 화면 아래쪽에 닿을 때 시작, 두 번째 원이 올라올수록 자연스럽게 진행
      const viewportStart = window.innerHeight * 0.82;
      const viewportEnd = window.innerHeight * 0.57;
      const travel = Math.max(1, viewportStart - viewportEnd + secondCenter - firstCenter);
      const progress = reducedMotion
        ? 1
        : Math.min(1, Math.max(0, (viewportStart - firstCenter) / travel));
      const reveal = Math.min(1, Math.max(0, (progress - 0.4) / 0.6));
      const eased = reveal * reveal * (3 - 2 * reveal);

      timeline.style.setProperty("--w-timeline-progress", progress.toFixed(4));
      timeline.style.setProperty("--w-second-opacity", (0.55 + eased * 0.45).toFixed(3));
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    // 글꼴·반응형 줄바꿈으로 원 위치가 달라져도 다시 계산
    const observer = typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(schedule)
      : null;
    observer?.observe(timeline);
    observer?.observe(firstDot);
    observer?.observe(secondDot);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="w-outcome">
      <div className="w-page__container w-outcome__layout">
        <figure className="w-outcome__final">
          <figcaption>FINAL DESIGN</figcaption>
          <button
            type="button"
            className="w-page__image-button w-outcome__panel-button"
            aria-label="FINAL DESIGN 전체 패널 크게 보기"
            onClick={(event) => onPreview("/assets/Urban/W_Panel.png", "FINAL DESIGN", event)}
          >
            <img
              src="/assets/Urban/W_Panel.png"
              alt="WELL-BEING 사월마을 도시설계 최종 패널"
              loading="lazy"
              decoding="async"
            />
            <span className="w-page__zoom-label" aria-hidden="true">↗ 크게 보기</span>
          </button>
        </figure>

        <div className="w-outcome__content">
          <section className="w-outcome__block" aria-labelledby="w-contribution-title">
            <div className="w-outcome__section-heading">
              <h2 id="w-contribution-title">
                01 MY CONTRIBUTION <small>- 4인 팀 프로젝트</small>
              </h2>
            </div>

            <div className="w-outcome__cards">
              {contributions.map((item) => (
                <article className="w-page__glass w-outcome__card" key={item.number}>
                  <span className="w-outcome__card-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <span className="w-outcome__card-rule" aria-hidden="true" />
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="w-outcome__block w-outcome__achievement" aria-labelledby="w-achievement-title">
            <div className="w-outcome__section-heading">
              <h2 id="w-achievement-title">02 ACHIEVEMENT</h2>
            </div>

            <div ref={timelineRef} className="w-outcome__timeline">
              <div className="w-outcome__timeline-track" aria-hidden="true" />
              <div className="w-outcome__milestone w-outcome__milestone--first">
                <span className="w-outcome__timeline-dot" aria-hidden="true" />
                <div className="w-outcome__milestone-main">
                  <h3>2024.09 ~ 2024.12</h3>
                  <p>학생중심 지역사회동행 프로그램 지원사업 참가</p>
                </div>
                <p className="w-outcome__milestone-aside">
                  지역사회의 현안에 대한 제안을 통해<br />
                  실질적인 개선 방향을 모색하는 프로그램에 참가
                </p>
              </div>

              <div className="w-outcome__milestone w-outcome__milestone--second">
                <span className="w-outcome__timeline-dot" aria-hidden="true" />
                <div className="w-outcome__milestone-main">
                  <h3>2025.11</h3>
                  <p>한국경관학회 학생작품 공모전 <strong>최우수상</strong> 수상</p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-outcome__block w-outcome__review" aria-labelledby="w-review-title">
            <div className="w-outcome__section-heading">
              <h2 id="w-review-title">03 REVIEW</h2>
            </div>

            <p ref={reviewRef} className="w-outcome__quote">
              <span className="w-outcome__quote-mark" aria-hidden="true">“</span>
              <strong>문제의식에서 시작해, 서로 다른 관점을 이해하는 설계로.</strong>
              <span className="w-outcome__quote-mark" aria-hidden="true">”</span>
            </p>

            <div className="w-outcome__review-copy">
              <p>
                사월마을의 주거환경 문제가 오랫동안 공론화되었음에도 실질적인 개선으로 이어지지 못하는 현실이 안타까웠습니다.
                아름다운 경관에 매료된 나그네가 사흘을 쉬어갔다는 마을 이름의 유래처럼, 기존 주민과 새로운 사람들이 함께
                머물고 싶은 공간을 되살리고자 프로젝트를 시작했습니다.
              </p>
              <p>
                지원사업에 참여하며 공무원과 마을 주민들을 직접 만나 인터뷰를 진행했고, 그 과정에서 행정과 주민이
                바라보는 문제의 관점이 서로 다르다는 것을 체감했습니다. 각자의 입장을 이해할수록 모두의 요구를 설계안에
                반영하는 일이 쉽지 않았고, 이상적인 계획과 현실적인 여건 사이에서 균형을 찾는 과정이 특히 어려웠습니다.
              </p>
              <p>
                이 경험을 통해 <strong>좋은 설계는 단순히 완성도 높은 결과물을 만드는 것이 아니라,</strong>
                <br className="w-outcome__desktop-break" />
                <strong>서로 다른 입장을 이해하고 그 사이에서 더 나은 방향을 고민하는 과정에서 시작된다는 것</strong>을 배웠습니다.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

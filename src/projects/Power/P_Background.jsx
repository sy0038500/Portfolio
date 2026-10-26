import { useEffect, useRef } from "react";
import "./P_Background.css";

const ASSETS = "/assets/Power/";

export default function P_Background() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      section.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          section.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="p-back" aria-labelledby="p-back-heading">
      <div className="p-back__art" aria-hidden="true">
        <img className="p-back__art-left" src={`${ASSETS}P_BackLeft.svg`} alt="" />
        <img className="p-back__art-right" src={`${ASSETS}P_BackRight.svg`} alt="" />
        <img className="p-back__art-navy" src={`${ASSETS}P_BackNavy.svg`} alt="" />
      </div>

      <p className="p-back__eyebrow" id="p-back-heading">
        Background & Goal
      </p>

      <div className="p-back__intro">
        <h2 className="p-back__quote">
          “작은 반응이 제품의 인상을<br />
          오래 남긴다”
        </h2>

        <div className="p-back__why">
          <h3>WHY</h3>
          <p>
            레트로 무드의 보조배터리 브랜드를 가정하고, 제품의 색감과 콘셉트를
            단순히 보여주는 것에서 나아가 사용자가 직접 반응을 체험할 수 있는
            랜딩페이지를 구현하고자 했습니다.
          </p>
          <p className="p-back__why-emphasis">
            특히 바이브코딩을 활용해 커서, 호버, 클릭, 스크롤 반응을 빠르게
            실험하며 동적인 UX 설계 과정을 익히는 것을 목표로 했습니다.
          </p>
        </div>
      </div>

      <div className="p-back__cards">
        <article className="p-back__card p-back__card--background">
          <h3>Background</h3>
          <div className="p-back__card-copy">
            <p>
              보조배터리처럼 기능이 명확한 단일 제품의 랜딩페이지는 이미지와
              설명만으로 구성될 경우, 화면 흐름이 쉽게 단조로워질 수 있습니다.
            </p>
            <p>
              따라서 사용자가 페이지를 스크롤하고, 마우스를 움직이고, 카드에
              호버하는 과정에서 즉각적인 반응을 느낄 수 있도록 마이크로
              인터랙션을 배치하여 사이트 체험의 흥미를 높이고자 했습니다.
            </p>
          </div>
        </article>

        <article className="p-back__card p-back__card--goal">
          <h3>Goal</h3>
          <div className="p-back__card-copy">
            <p>
              사용자의 마우스 이동, 호버, 클릭, 스크롤에 반응하는 마이크로
              인터랙션을 적용하여 가상의 ‘RETRO CELL’이라는 레트로 브랜드
              무드와 제품 라인업을 더 흥미롭게 탐색할 수 있는 동적
              랜딩페이지를 구축합니다.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

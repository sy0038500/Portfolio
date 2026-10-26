import "./App.css";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Index from "./Index";
import { useEffect, useState } from "react";

import GeoCaseStudy from "./projects/geo/GeoCaseStudy";
import P_Page from "./projects/Power/P_Page";
import AI_Page from "./projects/AI/AI_Page";
import DUVI_Page from "./projects/DUVI/DUVI_Page";

import W_Page from "./projects/WELL/W_Page";
import KH_Page from "./projects/KH/KH_Page";
import HAVEN_Page from "./projects/HAVEN/HAVEN_Page";
import SD_Page from "./projects/SD/SD_Page";

function Cover() {
  return (
    <section id="home" className="cover">
      <div className="cover__beige" aria-hidden="true"></div>
      <div className="cover__grid" aria-hidden="true"></div>
      <div className="cover__yellow" aria-hidden="true"></div>

      <section className="cover__heading">
        <h1 className="cover__title">
          UI/UX Design
          <span>& Publishing</span>
        </h1>

        <p className="cover__subtitle">PORTFOLIO</p>

        <div className="cover__highlight" aria-hidden="true"></div>
      </section>

      <div className="cover__info">
        <p className="cover__name">LEE SOOYEON</p>

        <div className="cover__fields">
          <span>UI/UX Design</span>
          <span>WEB Publishing</span>
          <span>Interaction</span>
        </div>
      </div>

      <div className="cover__line" aria-hidden="true">
        <span className="cover__dot"></span>
      </div>
    </section>
  );
}

function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash);

  useEffect(() => {
    function handleHashChange() {
      setCurrentHash(window.location.hash);
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const isGeoPage = currentHash === "#/projects/geo-platform";
  const isPowerPage = currentHash === "#/projects/power-cell";
  const isAIPage = currentHash === "#/projects/ai-dashboard";
  const isDUVIPage = currentHash === "#/projects/duvi-web";

  const isWellPage = currentHash === "#/projects/well-being";
  const isKHPage = currentHash === "#/projects/kimhae-nightscape";
  const isHAVENPage = currentHash === "#/projects/haven";
  const isSDPage = currentHash === "#/projects/songdo";

  useEffect(() => {
    if (
      isGeoPage ||
      isPowerPage ||
      isAIPage ||
      isDUVIPage ||
      isWellPage ||
      isKHPage ||
      isHAVENPage ||
      isSDPage
    ) {
      window.scrollTo(0, 0);
    } else if (currentHash === "#projects") {
      requestAnimationFrame(() => {
        document.getElementById("projects")?.scrollIntoView();
      });
    }
  }, [
    currentHash,
    isGeoPage,
    isPowerPage,
    isAIPage,
    isDUVIPage,
    isKHPage,
    isHAVENPage,
    isSDPage,
  ]);

  // 국토정보플랫폼 프로젝트 상세페이지
  if (isGeoPage) {
    return (
      <>
        <Header />
        <GeoCaseStudy />
      </>
    );
  }

  // Power-Cell 프로젝트 상세페이지
  if (isPowerPage) {
    return (
      <>
        <Header />
        <P_Page />
      </>
    );
  }

  // AI 기반 개인화 대시보드
  if (isAIPage) {
    return (
      <>
        <Header />
        <AI_Page />
      </>
    );
  }

  // DUVI 도시활력지표 플랫폼 프로젝트 상세페이지
  if (isDUVIPage) {
    return (
      <>
        <Header />
        <DUVI_Page />
      </>
    );
  }

  // WELL-BEING 사월마을 상세페이지
  if (isWellPage) {
    return (
      <>
        <Header />
        <W_Page />
      </>
    );
  }

  // 김해 야간경관 상세페이지
  if (isKHPage) {
    return (
      <>
        <Header />
        <KH_Page />
      </>
    );
  }

  // HAVEN 남해 도시설계 프로젝트 상세페이지
  if (isHAVENPage) {
    return (
      <>
        <Header />
        <HAVEN_Page />
      </>
    );
  }

  // 송도 도시설계 프로젝트 상세페이지
  if (isSDPage) {
    return (
      <>
        <Header />
        <SD_Page />
      </>
    );
  }

  // 메인 포트폴리오
  return (
    <>
      <Header />

      <main>
        <Cover />
        <About />
        <Skills />
        <Index />
      </main>
    </>
  );
}

export default App;

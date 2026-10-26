import "./GeoCaseStudy.css";
import GeoBackground from "./GeoBackground";
import GeoProblem from "./GeoProblem";
import GeoPersona from "./GeoPersona";
import GeoHypothesis from "./GeoHypothesis";
import GeoStrategy from "./GeoStrategy";
import GeoWireframe from "./GeoWireframe";
import GeoDesignSystem from "./GeoDesignSystem";
import GeoMainDesign from "./GeoMainDesign";
import GeoDesignDetail from "./GeoDesignDetail";
import GeoImplementation from "./GeoImplementation";
import GeoResult from "./GeoResult";
import GeoEnding from "./GeoEnding";

function GeoCaseStudy() {
  return (
    <main className="geo-case" aria-labelledby="geo-case-title">
      <a href="#projects" className="geo-case__eyebrow">
        PORTFOLIO CASE STUDY - 01
      </a>

      <div className="geo-case__hero">
        <div className="geo-case__intro">
          <h1 id="geo-case-title" className="geo-case__title">
            <span>국토정보플랫폼</span>
            <span>UI/UX 웹접근성 개선</span>
          </h1>

          <p className="geo-case__description">
            누구나 쉽게 원하는 정보를 찾을 수 있도록 재설계한
            <span>국토정보플랫폼 개선</span>
          </p>

          <div className="geo-case__links">
            <a
              href="https://www.figma.com/design/i75UCnb58eucAwlAGLFhmj/%EA%B3%B5%EA%B3%B5%EC%82%AC%EC%9D%B4%ED%8A%B8-%EA%B0%9C%EC%84%A0?node-id=173-2406&m=dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              피그마링크
            </a>

            <a
              href="https://sy0038500.github.io/national-geo-platform/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github 링크
            </a>
          </div>
        </div>

        <div className="geo-case__visual">
          <img
            src="assets/geo/pf_pro1_detail1.png"
            alt="국토정보플렛폼 리디자인 데스크톱 화면 목업"
            className="geo-case__visual-image"
          />
        </div>
        <ul className="geo-case__details">
          <li>PERIOD: 2026. 04. 09 ~ 2026. 05. 19</li>
          <li>My Role : UI/UX 기획 및 퍼블리싱 100%</li>
          <li>
            Tech &amp; Tools : Adobe Photoshop, Illustrator, Figma, Generative
            AI(Chat GPT), Vibe Coding
          </li>
          <li>Focus : 정보구조개선 &amp; 웹접근성 &amp; AI 기반 UX 검증</li>
        </ul>
      </div>

      <GeoBackground />
      <GeoProblem />
      <GeoPersona />
      <GeoHypothesis />
      <GeoStrategy />
      <GeoWireframe />
      <GeoDesignSystem />
      <GeoMainDesign />
      <GeoDesignDetail />
      <GeoImplementation />
      <GeoResult />
      <GeoEnding />
    </main>
  );
}

export default GeoCaseStudy;

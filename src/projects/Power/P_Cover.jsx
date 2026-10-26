import "./P_Cover.css";
import Magnet from "./Magnet";

const assets = "assets/Power/";

export default function P_Cover() {
  return (
    <section className="p-cover" aria-labelledby="p-cover-title">
      {/* 피그마 원본 빨간 배경 도형 */}
      <img
        className="p-cover__red"
        src={`${assets}P_bg_red.svg`}
        alt=""
        aria-hidden="true"
      />

      {/* 첫 번째 GIF 목업 */}
      <div className="p-cover__screen">
        <img
          src={`${assets}pf_pro2_gif1.gif`}
          alt="RETRO CELL 랜딩페이지 동작 미리보기"
        />
      </div>

      {/* 피그마 원본 노란 사선 그래픽 */}
      <img
        className="p-cover__yellow"
        src={`${assets}P_bg_stripes.svg`}
        alt=""
        aria-hidden="true"
      />

      <p className="p-cover__eyebrow">PORTFOLIO CASE STUDY - 02</p>

      <div className="p-cover__intro">
        <h1 className="p-cover__title" id="p-cover-title">
          <span>RETRO CELL</span>
          <span>보조배터리 브랜드 랜딩페이지</span>
        </h1>

        <p className="p-cover__tagline">
          바이브코딩을 활용한 동적 UX 설계 및 구현
        </p>

        <Magnet strength={24}>
          <a
            className="p-cover__shop cursor-target"
            href="https://sy0038500.github.io/Power-Cell/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="RETRO CELL 사이트 방문 (새 탭)"
          >
            Github 링크
          </a>
        </Magnet>
      </div>

      <ul className="p-cover__facts">
        <li>PERIOD: 2026. 07. 10 ~ 11</li>

        <li>My Role : UI/UX 기획 및 퍼블리싱 100%</li>

        <li>Tech &amp; Tools : Figma, Generative AI(Chat GPT), Vibe Coding</li>

        <li>Focus : 마이크로 인터렉션 설계 &amp; 바이브코딩 워크플로우 학습</li>
      </ul>
    </section>
  );
}

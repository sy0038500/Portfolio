
import "./AI_Cover.css";

export default function AI_Cover() {
  return (
    <section
      className="ai-cover"
      aria-labelledby="ai-cover-title"
    >
      {/* 01. 프로젝트 번호 */}
      <p className="ai-cover__eyebrow">
        PORTFOLIO CASE STUDY - 03
      </p>

      {/* 02. 프로젝트 소개 */}
      <div className="ai-cover__copy">
        <h1 id="ai-cover-title" className="ai-cover__title">
          <span>나를 위한 AI 개인화</span>
          <span>대시보드</span>
        </h1>

        <p className="ai-cover__subtitle">
          나의 기분과 오늘의 상태에 맞춰 변화하는
          <span>AI 기반 개인화 대시보드</span>
        </p>

        {/* 03. 외부 링크 */}
        <div className="ai-cover__links">
          <a
            className="ai-cover__link ai-cover__link--figma"
            href="https://www.figma.com/design/B7UbNMJAg11drTvcgVHHpb/%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C?node-id=9-421&m=dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ai-cover__link-text">
              <small>FIGMA</small>
              <strong>디자인 보기</strong>
            </span>
            <span className="ai-cover__link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>

          <a
            className="ai-cover__link ai-cover__link--vercel"
            href="https://dashboard-design-six-peach.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ai-cover__link-text">
              <small>VERCEL</small>
              <strong>사이트 보기</strong>
            </span>
            <span className="ai-cover__link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>

      {/* 04. 대표 목업 */}
      <div className="ai-cover__visual">
        <img
          src="/assets/AI/pf_pro3_colorview.png"
          alt="AI 개인화 대시보드의 모바일 화면과 다양한 컬러 테마 목업"
          fetchPriority="high"
        />
      </div>

      {/* 05. 프로젝트 정보 */}
      <ul className="ai-cover__details">
        <li>PERIOD: 2026. 06. 25 ~ 26</li>
        <li>My Role : UI/UX 기획 및 퍼블리싱 100%</li>
        <li>
          Tech &amp; Tools : Figma, Antigravity,
          Weather API, Gemini API, Vibe Coding
        </li>
        <li>
          Focus : Open API 연동 &amp; AI 프롬프트 엔지니어링
        </li>
      </ul>
    </section>
  );
}

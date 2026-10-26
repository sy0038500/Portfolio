import { useEffect, useState } from "react";
import "./Skills.css";

const toolRows = [
  [
    { name: "Photoshop", file: "ps.png" },
    { name: "Illustrator", file: "ai.png" },
    { name: "Premiere Pro", file: "pr.png" },
    { name: "After Effects", file: "ae.png" },
  ],
  [
    { name: "Figma", file: "figma.png" },
    { name: "Antigravity", file: "antigravity.png" },
    { name: "HTML5", file: "html5.png" },
    { name: "CSS3", file: "css3.png" },
    { name: "JavaScript", file: "js.png" },
    { name: "Github", file: "github.png" },
  ],
  [
    { name: "Slack", file: "slack.png" },
    { name: "Notion", file: "notion.png" },
    { name: "ChatGPT", file: "chatgpt.png" },
    { name: "Gemini", file: "gemini.png" },
  ],
];

const achievements = [
  {
    date: "2025.11",
    title: "한국경관학회 학생작품 공모전 최우수상",
  },
  {
    date: "2024.09 ~ 2024.12",
    title: "학생중심 지역사회동행 프로그램 지원 사업 참여",
  },
  {
    date: "2024.09",
    title: "제22회 김해시 도시경관디자인 작품공모전 장려상",
  },
  {
    date: "2023.11",
    title: "인천대학교 도시공학과 학술제 장려상",
  },
];

const certifications = [
  {
    date: "2026.09",
    title: "정보처리기사 필기 합격",
    area: "engineer",
  },
  {
    date: "2026.07",
    title: "웹디자인개발기능사 필기 합격",
    area: "web",
  },
  {
    date: "2026.06",
    title: "GTQi 1급",
    area: "gtqi",
  },
  {
    date: "2025.08",
    title: "TOEIC Speaking IH 150",
    area: "toeic",
  },
  {
    date: "2025.05",
    title: "GTQ 1급",
    area: "gtq",
  },
];

function InfoItem({ date, title, className = "" }) {
  return (
    <div className={`skills__record ${className}`}>
      <span className="skills__date">{date}</span>
      <p className="skills__record-title">{title}</p>
    </div>
  );
}

function Skills() {
  const [selectedTool, setSelectedTool] = useState(null);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setSelectedTool(null);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);
  
  useEffect(() => {
    function handleOutsideClick(event) {
      const clickedTool = event.target.closest(".skills__tool");

      if (!clickedTool) {
        setSelectedTool(null);
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, []);

  return (
    <section
      id="skills"
      className="skills-section"
      aria-label="학력, 수상 경력, 스킬 및 자격 정보"
    >
      <div className="skills__layout">
        <div className="skills__column">
          <section className="skills_education">
            <h2 className="skills__title">Education</h2>

            <div className="skills__records">
              <InfoItem date="2022.03 ~ " title="인천대학교 도시공학과 재학" />
            </div>
          </section>

          <section className="skills__achievements">
            <h2 className="skills__title">Achievements</h2>
            <div className="skills__records">
              {achievements.map((item) => (
                <InfoItem key={item.date} date={item.date} title={item.title} />
              ))}
            </div>
          </section>
        </div>

        <div className="skills__column">
          <section className="skills__tools">
            <h2 className="skills__title">Skills & Tools</h2>
            <div className="skills__tool-rows">
              {toolRows.map((row, rowIndex) => (
                <div className="skills__tool_row" key={rowIndex}>
                  {row.map((tool) => (
                    <button
                      key={tool.name}
                      className="skills__tool"
                      type="button"
                      aria-label={`${tool.name} 이름보기`}
                      aria-pressed={selectedTool === tool.name}
                      onClick={() => {
                        setSelectedTool((prev) =>
                          prev === tool.name ? null : tool.name,
                        );
                      }}
                    >
                      <img
                        src={`/assets/skills/${tool.file}`}
                        alt=""
                        width="76"
                        height="76"
                      />

                      <span className="skills__tooltip" aria-hidden="true">
                        {tool.name}
                      </span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section className="skills__certifications">
            <h2 className="skills__title">Certifications</h2>

            <div className="skills__cert-grid">
              {certifications.map((item) => (
                <InfoItem
                  key={item.area}
                  date={item.date}
                  title={item.title}
                  className={`skills__record--${item.area}`}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Skills;

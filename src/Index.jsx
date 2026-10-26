import "./Index.css";

const webProjects = [
  {
    id: "web-01",
    title: "국토정보플랫폼 UI/UX 웹접근성 개선",
    image: "/assets/index/pf_index1.webp",
    href: "#/projects/geo-platform",
  },
  {
    id: "web-02",
    title: "RETRO CELL 랜딩페이지",
    image: "/assets/index/pf_index2.webp",
    href: "#/projects/power-cell",
  },
  {
    id: "web-03",
    title: "AI 개인화 대시보드",
    image: "/assets/index/pf_index3.webp",
    href: "#/projects/ai-dashboard",
  },
  {
    id: "web-04",
    title: "도시활력지표(DUVI) 웹서비스",
    image: "/assets/index/pf_index4.webp",
    href: "#/projects/duvi-web",
  },
];

// 02. URBAN DESIGN
// Portfolio.pdf INDEX의 원래 제목과 서브타이틀
const urbanProjects = [
  {
    id: "urban-01",
    title: "WELL-Being",
    subtitle: "인천 사월마을 · Award",
    image: "/assets/index/pf_urban1.jpg",
    href: "#/projects/well-being",
  },
  {
    id: "urban-02",
    title: "김해, 가야의 빛이 쉬어가는 공간",
    subtitle: "야간경관디자인 · Award",
    image: "/assets/index/pf_urban2.jpg",
    href: "#/projects/kimhae-nightscape",
  },
  {
    id: "urban-03",
    title: "HAVEN",
    subtitle: "남해 · Urban Planning",
    image: "/assets/index/pf_urban3.jpg",
    href: "#/projects/haven",
  },
  {
    id: "urban-04",
    title: "선으로 엮은 활기, 송도를 다시 쓰다.",
    subtitle: "송도 · Urban Design",
    image: "/assets/index/pf_urban4.jpg",
    href: "#/projects/songdo",
  },
];

function Index() {
  return (
    <section
      id="projects"
      className="index-section"
      aria-labelledby="index-title"
    >
      <div className="index__inner">
        <h2 id="index-title" className="index__title">
          Index
        </h2>

        {/* 01. WEB & UI/UX */}
        <section
          className="index__group index__group--web"
          aria-labelledby="index-web-title"
        >
          <div className="index__group-heading">
            <h3 id="index-web-title" className="index__group-title">
              01 - Web &amp; UI/UX
            </h3>

            <span className="index__group-label">Digital Projects</span>
          </div>

          <div
            className="index__web-grid"
            role="region"
            aria-label="웹 프로젝트 목록"
            tabIndex={0}
          >
            {webProjects.map((project) => (
              <figure className="index__web-card" key={project.id}>
                <figcaption className="index__web-caption">
                  {project.title}
                </figcaption>

                <a
                  href={project.href}
                  className="index__web-image"
                  aria-label={`${project.title} 상세페이지 보기`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} 모바일 목업`}
                    loading="lazy"
                  />
                </a>
              </figure>
            ))}
          </div>
        </section>

        {/* 02. URBAN DESIGN */}
        <section
          className="index__group index__group--urban"
          aria-labelledby="index-urban-title"
        >
          <div className="index__group-heading">
            <h3 id="index-urban-title" className="index__group-title">
              02 — URBAN DESIGN
            </h3>

            <span className="index__group-label">Selected Works</span>
          </div>

          <div className="index__urban-grid">
            {urbanProjects.map((project) => (
              <figure className="index__urban-card" key={project.id}>
                <img
                  className="index__urban-image"
                  src={project.image}
                  alt=""
                  loading="lazy"
                />

                {/* 이미지 위 그라데이션과 기존 문구 */}
                <figcaption className="index__urban-overlay">
                  <h4 className="index__urban-title">{project.title}</h4>

                  <p className="index__urban-subtitle">{project.subtitle}</p>
                </figcaption>

                {/* 카드 전체 클릭 시 해당 상세페이지로 이동 */}
                <a
                  href={project.href}
                  className="index__urban-card-link"
                  aria-label={`${project.title} 상세페이지 보기`}
                />
              </figure>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Index;

import "./DUVI_MainFeatures.css";

/* DUVI 09 — Main Features */
const features = [
  {
    id: "01",
    title: "Yearly DUVI Map",
    description:
      "연도를 선택하면 서울시 행정동별 도시활력 등급과 평균·최고·최저 점수를 확인할 수 있습니다.",
    image: "/assets/DUVI/pro4_detail1.png",
    alt: "연도별 도시활력 지도 정보",
  },
  {
    id: "02",
    title: "Region Detail View",
    description:
      "관심 행정동을 선택하면 종합점수와 등급, 분야별 세부점수를 한 화면에서 확인할 수 있습니다.",
    image: "/assets/DUVI/pro4_deatil2.png",
    alt: "행정동별 DUVI 상세정보",
  },
  {
    id: "03",
    title: "Ranking",
    description:
      "선택 연도의 상위 행정동을 순위로 제공해 지역 간 점수와 상대적인 위치를 빠르게 비교할 수 있습니다.",
    image: "/assets/DUVI/pro4_detail3.png",
    alt: "DUVI 행정동별 순위 화면",
  },
];

export default function DUVI_MainFeatures() {
  return (
    <section
      className="duvi-main-features"
      aria-labelledby="duvi-main-features-title"
    >
      {/* 좌측 상단 페이지 제목 */}
      <h2 id="duvi-main-features-title" className="duvi-main-features__eyebrow">
        Main Features
      </h2>

      {/* 기능 3개 */}
      <div className="duvi-main-features__grid">
        {features.map((feature) => (
          <article className="duvi-main-features__item" key={feature.id}>
            <h3 className="duvi-main-features__title">
              {feature.id} {feature.title}
            </h3>

            {/* Figma 기준 휴대폰 이미지 크롭 */}
            <div className="duvi-main-features__screen">
              <img
                src={feature.image}
                alt={feature.alt}
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="duvi-main-features__description">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

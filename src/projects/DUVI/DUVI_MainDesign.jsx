import "./DUVI_MainDesign.css";

/* DUVI 08 — Main Design */
export default function DUVI_MainDesign() {
  return (
    <section
      className="duvi-main-design"
      aria-labelledby="duvi-main-design-title"
    >
      {/* 좌측 상단 페이지 제목 */}
      <h2 id="duvi-main-design-title" className="duvi-main-design__eyebrow">
        Main Design
      </h2>

      {/* 디바이스 전체 목업 원본 */}
      <div className="duvi-main-design__visual">
        <img
          src="/assets/DUVI/pf_pro4_main.png"
          alt="DUVI 웹서비스의 데스크탑, 노트북, 태블릿, 모바일 목업"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}


import "./GeoMainDesign.css";

function GeoMainDesign() {
  return (
    <section
      className="geo-main"
      aria-labelledby="geo-main-heading"
    >
      <h2
        id="geo-main-heading"
        className="geo-main__heading"
      >
        Main Design
      </h2>

      <div className="geo-main__visual">
        <img
          src="assets/geo/pf_pro1_main.png"
          alt="국토정보플랫폼 리디자인의 데스크톱, 노트북, 태블릿, 모바일 반응형 화면 목업"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}

export default GeoMainDesign;

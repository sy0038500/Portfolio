
import "./GeoWireframe.css";

function GeoWireframe() {
  return (
    <section
      className="geo-wireframe"
      aria-labelledby="geo-wireframe-heading"
    >
      <h2
        id="geo-wireframe-heading"
        className="geo-wireframe__heading"
      >
        Wireframe
      </h2>

      <div className="geo-wireframe__gallery">
        <div className="geo-wireframe__item">
          <img
            src="assets/geo/pf1_wireframe_01.png"
            alt="국토정보플랫폼 메인 화면 와이어프레임"
            loading="lazy"
          />
        </div>

        <div className="geo-wireframe__item">
          <img
            src="assets/geo/pf1_wireframe_02.png"
            alt="국토정보플랫폼 카드형 화면 와이어프레임"
            loading="lazy"
          />
        </div>

        <div className="geo-wireframe__item">
          <img
            src="assets/geo/pf1_wireframe_03.png"
            alt="국토정보플랫폼 리스트형 화면 와이어프레임"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default GeoWireframe;


import "./GeoDesignDetail.css";

function GeoDesignDetail() {
  return (
    <section
      className="geo-detail"
      aria-labelledby="geo-detail-heading"
    >
      <h2
        id="geo-detail-heading"
        className="geo-detail__heading"
      >
        Design Detail
      </h2>

      {/* 01. 메인 화면 개선 */}
      <div className="geo-detail__top">
        <div className="geo-detail__top-image">
          <img
            src="assets/geo/pf_pro1_detail_top.png"
            alt="국토정보플랫폼 리디자인 메인 화면. 검색창, 서비스 바로가기 및 지도 정보 카드"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* 검색창 오른쪽 */}
        <div className="geo-detail__note geo-detail__note--search">
          <h3>통합 검색 기능 강화</h3>
          <p>
            사용자가 원하는 정보를 검색창을 통해
            메인화면에서 바로 탐색할 수 있도록 개선
          </p>
        </div>

        {/* 카드 영역 왼쪽 */}
        <div className="geo-detail__note geo-detail__note--preview">
          <h3>선택 전 정보 제공</h3>
          <p>
            항목명만으로 파악하기 어려웠던 데이터를
            이미지와 요약 설명이 포함된
            카드 구조로 개선
          </p>
        </div>

        {/* 카드 영역 오른쪽 */}
        <div className="geo-detail__note geo-detail__note--buttons">
          <h3>버튼 반응 명확화</h3>
          <p>
            작고 구분이 약했던 버튼을
            색상과 위치가 명확한 선택 요소로 정리해
            클릭 가능성을 높임
          </p>
        </div>
      </div>

      {/* 02. 자료실 / 지원서비스 개선 */}
      <div className="geo-detail__bottom">
        <div className="geo-detail__bottom-image">
          <img
            src="assets/geo/pf_pro1_detail_bottom.png"
            alt="국토정보플랫폼 리디자인의 자료실 목록과 지원서비스 카드 화면"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="geo-detail__bottom-note">
          <h3>정보 유형별 화면 패턴 정리</h3>
          <p>
            같은 형태로 반복되던 정보를
            지도 서비스, 자료실, 지원서비스의 성격에 맞게
            서로 다른 화면 구조로 구분
          </p>
        </div>
      </div>
    </section>
  );
}

export default GeoDesignDetail;

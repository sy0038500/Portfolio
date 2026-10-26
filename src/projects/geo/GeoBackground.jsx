
import "./GeoBackground.css";

function GeoBackground() {
  return (
    <section
      className="geo-background"
      aria-labelledby="geo-background-title"
    >
      <h2
        id="geo-background-title"
        className="geo-background__heading"
      >
        Background
      </h2>

      {/* 01. 상단 질문 말풍선 */}
      <div className="geo-background__question">
        “일반 사용자는 <strong>쉽게</strong> 접근하고,
        전문가는 <strong>빠르게</strong> 찾는
        지리 데이터 서비스가 될 수 있을까요?”
      </div>

      {/* 02. 문제 상황 다이어그램 */}
      <div className="geo-background__diagram">
        {/* 왼쪽: 기존 사이트 목업 */}
        <div className="geo-background__visual">
          <img
            src="assets/geo/pf_pro1_background.png"
            alt="기존 국토정보플랫폼 모바일 화면"
            loading="lazy"
          />
        </div>

        {/* 초록색 세로 점선 */}
        <div
          className="geo-background__separator"
          aria-hidden="true"
        />

        {/* 가운데: 사용자 아이콘 */}
        <div className="geo-background__person">
          <div
            className="geo-background__person-icon"
            aria-hidden="true"
          >
            <span className="geo-background__person-head" />
            <span className="geo-background__person-body" />
          </div>

          <span className="geo-background__person-label">
            일반 사용자
          </span>
        </div>

        {/* 오른쪽: 사용자가 겪는 불편함 */}
        <div className="geo-background__problems">
          <div className="geo-background__problem">
            지도 서비스 명칭만으로는
            <span>
              어떤 데이터를 제공하는지 파악하기 어려움
            </span>
          </div>

          <div className="geo-background__problem">
            여러 항목을 직접 클릭하며 확인해야 함
          </div>

          <div className="geo-background__problem">
            탐색 시간이 길어지는 불편함을 겪음
          </div>
        </div>
      </div>

      {/* 03. 하단 결론 말풍선 */}
      <div className="geo-background__conclusion">
        <p>
          이 프로젝트는{" "}
          <strong>
            일반 사용자는 지도 서비스의 의미를 쉽게
            이해하고, 전문가는 직관적으로 원하는
            지리 데이터에 도달할 수 있도록 정보 구조와
            UI/UX를 개선하는 것을 목표
          </strong>
          로 진행했습니다.
        </p>
      </div>
    </section>
  );
}

export default GeoBackground;

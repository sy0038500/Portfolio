import "./GeoPersona.css";

function GeoPersona() {
  return (
    <section className="geo-persona" aria-labelledby="geo-persona-heading">
      <h2 id="geo-persona-heading" className="geo-persona__heading">
        Persona / User Context
      </h2>

      {/* 페르소나 설정 목적 */}
      <p className="geo-persona__intro">
        발견한 접근성 문제가{" "}
        <strong>실제로 누구에게 가장 크게 영향을 미치는지 구체화</strong>
        하기 위해서 페르소나를 설정했습니다.
      </p>

      <div className="geo-persona__layout">
        {/* 왼쪽: 페르소나 프로필 */}
        <div className="geo-persona__profile">
          <img
            className="geo-persona__portrait"
            src="/assets/geo/pf_pro1_persona.png"
            alt="김영수 페르소나의 인물 사진"
            loading="lazy"
          />

          <div className="geo-persona__identity">
            <h3 className="geo-persona__name">김영수</h3>

            <p className="geo-persona__info">62세, 전 자영업자</p>

            <span className="geo-persona__level">IT 숙련도 : 하</span>
            <p className="geo-persona__ai-note">
              * 페르소나 이미지는 생성형 AI로 제작한 예시 이미지입니다.
            </p>
          </div>
        </div>

        {/* 오른쪽: 사용자 상황과 불편함 */}
        <div className="geo-persona__context">
          <div className="geo-persona__block">
            <div className="geo-persona__block-heading">
              <img
                src="/assets/geo/pf_pro1_situation.svg"
                alt=""
                aria-hidden="true"
              />
              <h3>SITUATION</h3>
            </div>

            <p className="geo-persona__situation">
              은퇴 후, 귀농 준비 중
              <span>관심 있는 농지 위치 확인을 위한 지도 정보 조회</span>
            </p>
          </div>

          <div className="geo-persona__block">
            <div className="geo-persona__block-heading">
              <img
                src="/assets/geo/pf_pro1_pain.svg"
                alt=""
                aria-hidden="true"
              />
              <h3>PAIN POINT</h3>
            </div>

            <ul className="geo-persona__pain-list">
              <li>원하는 지리 데이터를 찾기 어려움</li>
              <li>항목명만으로 데이터 내용을 예측하기 힘듦</li>
              <li>버튼 반응이 뚜렷하지 않아 선택 상태에 대한 확신 부족</li>
              <li>반복 확인 과정으로 인한 탐색 피로 누적</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GeoPersona;

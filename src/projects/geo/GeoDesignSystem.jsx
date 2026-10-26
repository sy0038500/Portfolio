import "./GeoDesignSystem.css";

const iconPath = "/assets/geo/icons/";

const typography = [
  ["Card Title", "32pt", "Extra Bold"],
  ["Logo Large", "30pt", "Bold"],
  ["Archive Title", "28pt", "Bold"],
  ["Card Body", "28pt", "Bold"],
  ["Archive Body", "24pt", "Medium"],
  ["Logo Small", "24pt", "Medium"],
  ["Button", "24pt", "Medium"],
  ["Header Button", "16pt", "Medium"],
];

const variables = [
  ["Breakpoint", "402", "744", "1280"],
  ["Hero Height", "378", "437", "664"],
  ["Category Image Height", "200", "250", "420"],
  ["Map Image Size", "120", "160", "200"],
  ["Map Service Block Width", "370", "184", "570"],
  ["Geo Data Block", "146", "200", "300"],
  ["Support Service Block Height", "131", "277", "427"],
  ["Archive Icon Size", "18", "20", "35"],
];

const iconGroups = [
  {
    title: "Navigation Icons",
    icons: [
      ["guide-icon.png", "이용안내"],
      ["sitemap-icon.png", "사이트맵"],
      ["login-icon.png", "로그인"],
      ["join-icon.png", "회원가입"],
      ["cancel-icon.png", "취소"],
      ["search-icon.png", "검색"],
      ["menu_icon.png", "전체메뉴"],
    ],
  },
  {
    title: "Support Icons",
    icons: [
      ["work_support_icon.png", "업무지원"],
      ["open_api.png", "오픈 API"],
      ["civil_service.png", "민원서비스"],
      ["emergency_spatial_info.png", "긴급공간정보"],
    ],
  },
  {
    title: "Service Icons",
    icons: [
      ["digital_map.svg", "수치지도"],
      ["aerial_photo_icon.png", "항공사진"],
      ["national_standard_point_icon.png", "국가기준점"],
      ["paper_map_icon.png", "종이지도"],
      ["national_satellite_imagery_icon.png", "국토위성영상"],
    ],
  },
];

const shortcuts = [
  {
    image: "work_support_icon.png",
    title: "업무지원",
    text: "국토지리정보원에서 제공하는 서비스 지원",
  },
  {
    image: "open_api.png",
    title: "오픈 API",
    text: "사용자가 직접 공간정보와 관련된 응용 서비스 개발",
  },
  {
    image: "civil_service.png",
    title: "민원서비스",
    text: "국민과 소통하기 위한 민원예약, 지도구입, FAQ 등을 제공",
  },
];

function GeoDesignSystem() {
  return (
    <section className="geo-ds" aria-labelledby="geo-ds-heading">
      <h2 id="geo-ds-heading" className="geo-ds__heading">
        Design System
      </h2>

      <div className="geo-ds__inner">
        {/* 01. COLOR + TYPOGRAPHY */}
        <div className="geo-ds__two-columns">
          <section className="geo-ds__colors">
            <h3 className="geo-ds__title">Color</h3>

            <div className="geo-ds__color-main">
              <span>Primary Green</span>
              <span>#1F5A22</span>
            </div>

            <div className="geo-ds__color-sub">
              <span>Secondary Green</span>
              <span>#66BB6A</span>
            </div>

            <div className="geo-ds__neutral-colors">
              <div className="geo-ds__color-light">
                <span>Gray 100</span>
                <span>#F5F5F5</span>
              </div>

              <div className="geo-ds__color-gray">
                <span>Gray 500</span>
                <span>#666666</span>
              </div>

              <div className="geo-ds__color-black">
                <span>Black</span>
                <span>#111111</span>
              </div>
            </div>
          </section>

          <section className="geo-ds__type">
            <h3 className="geo-ds__title">Responsive Typography</h3>

            <p className="geo-ds__font-name">Pretendard 프리텐다드</p>

            <div className="geo-ds__table-scroll">
              <table className="geo-ds__type-table">
                <thead>
                  <tr>
                    <th>Scale</th>
                    <th>Size</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {typography.map(([scale, size, weight]) => (
                    <tr key={scale}>
                      <td>{scale}</td>
                      <td>{size}</td>
                      <td>{weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* 02. LOGO + RESPONSIVE VARIABLES */}
        <div className="geo-ds__two-columns geo-ds__middle">
          <section className="geo-ds__logo">
            <h3 className="geo-ds__title">Site Logo</h3>

            <div className="geo-ds__logo-image">
              <img
                src="/assets/geo/logo-icon.png"
                alt="국토정보플랫폼 메인 로고"
                loading="lazy"
              />
            </div>

            <p className="geo-ds__logo-caption">
              국토정보플랫폼의 지도 기반 서비스를 상징하는 메인 로고
            </p>

            <p className="geo-ds__hashtags">
              #지도기반 #위치정보 #국토데이터 #직관적
            </p>

            <p className="geo-ds__ai-note">
              * 로고 이미지는 생성형 AI를 활용하여 제작했습니다.
            </p>
          </section>

          <section className="geo-ds__variables">
            <h3 className="geo-ds__title">Responsive Variables</h3>

            <p className="geo-ds__description">
              디바이스별 화면 변화에 맞춰 주요 UI 요소의 크기와 간격을 변수로
              정리하여, 일관된 반응형 웹 화면을 구현하기 위해 다음과 같은 변수로
              설정했습니다.
            </p>

            <div className="geo-ds__table-scroll">
              <table className="geo-ds__variable-table">
                <thead>
                  <tr>
                    <th>Variable</th>
                    <th>Mobile</th>
                    <th>Tablet</th>
                    <th>Desktop</th>
                  </tr>
                </thead>

                <tbody>
                  {variables.map(([name, mobile, tablet, desktop]) => (
                    <tr key={name}>
                      <td>{name}</td>
                      <td>{mobile}</td>
                      <td>{tablet}</td>
                      <td>{desktop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* 03. ICON */}
        <section className="geo-ds__icons">
          <h3 className="geo-ds__title">ICON</h3>

          <p className="geo-ds__description">
            사용자가 서비스의 기능을 빠르게 인지할 수 있도록 내비게이션, 지도
            서비스, 지원서비스 아이콘을 통일된 스타일로 정리했습니다.
          </p>

          <div className="geo-ds__icon-groups">
            {iconGroups.map((group) => (
              <div className="geo-ds__icon-group" key={group.title}>
                <h4>{group.title}</h4>

                <div className="geo-ds__icon-list">
                  {group.icons.map(([file, name]) => (
                    <div className="geo-ds__icon-item" key={file}>
                      <img
                        src={`${iconPath}${file}`}
                        alt={name}
                        title={name}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="geo-ds__ai-note">
            * 아이콘은 생성형 AI를 활용하여 제작 및 가공했습니다.
          </p>
        </section>

        {/* 04. COMPONENT */}
        <section className="geo-ds__components">
          <h3 className="geo-ds__title">Component</h3>

          <p className="geo-ds__description">
            반복적으로 사용되는 버튼, 카드, 검색창을 컴포넌트로 정리하여 화면
            전반의 UI 일관성을 유지하고, 클릭 가능한 요소의 상태 변화를 명확하게
            전달할 수 있도록 설계하였습니다.
          </p>

          <div className="geo-ds__component-grid">
            {/* 왼쪽: 바로가기 버튼과 서비스 카드 */}
            <div className="geo-ds__component-column">
              <div className="geo-ds__shortcut-examples">
                {["default", "hover"].map((state) => (
                  <div
                    key={state}
                    className={`geo-ds__shortcut geo-ds__shortcut--${state}`}
                  >
                    <div className="geo-ds__shortcut-icon">
                      <img src={`${iconPath}digital_map.svg`} alt="" />
                    </div>

                    <span>수치지도</span>

                    <span className="geo-ds__demo-button">바로가기</span>
                  </div>
                ))}
              </div>

              <p className="geo-ds__component-caption">
                ▲ Main Block Button (Default/Hover)
              </p>

              <div className="geo-ds__support-examples">
                {shortcuts.map((item) => (
                  <div className="geo-ds__support-card" key={item.title}>
                    <div
                      className={`geo-ds__support-icon ${
                        item.title === "업무지원"
                          ? "geo-ds__support-icon--work"
                          : ""
                      }`}
                    >
                      <img src={`${iconPath}${item.image}`} alt="" />
                    </div>

                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>

              <p className="geo-ds__component-caption">
                ▲ Service Shortcut Card
              </p>
            </div>

            {/* 가운데: 지도 서비스 카드 */}
            <div className="geo-ds__component-column">
              {["default", "hover"].map((state) => (
                <div
                  key={state}
                  className={`geo-ds__map-card geo-ds__map-card--${state}`}
                >
                  <img
                    src="/assets/geo/map-card-image.jpeg"
                    alt="국토정보플랫폼 지도 서비스 미리보기"
                    loading="lazy"
                  />

                  <div className="geo-ds__map-card-content">
                    <h4>통합지도검색</h4>

                    <p>
                      원하는 정보를 입력하여 지도 기반의 공간정보를 직접
                      확인하고 수치지도, 항공사진, 정사영상, 기준점 등을
                      다운로드
                    </p>

                    <span className="geo-ds__demo-button">더보기</span>
                  </div>
                </div>
              ))}

              <p className="geo-ds__component-caption">
                ▲ Map Service Card (Default/Hover)
              </p>
            </div>

            {/* 오른쪽: 자료실 목록과 검색창 */}
            <div className="geo-ds__component-column">
              <div className="geo-ds__archive-examples">
                {["default", "hover"].map((state) => (
                  <div
                    key={state}
                    className={`geo-ds__archive geo-ds__archive--${state}`}
                  >
                    <span className="geo-ds__archive-tag">지도자료</span>

                    <p>
                      수치지도, 정사영상, 온맵 등의 지도자료를 소개하고 다운로드
                      받을 수 있는 서비스
                    </p>

                    <span className="geo-ds__archive-arrow" aria-hidden="true">
                      <img src={`${iconPath}archive-arrow.png`} alt="" />
                    </span>
                  </div>
                ))}
              </div>

              <p className="geo-ds__component-caption">
                ▲ Archive List (Default/Hover)
              </p>

              <div className="geo-ds__search-examples">
                {/* 실제 클릭/입력이 가능한 검색창 */}

                <div className="geo-ds__search-demo geo-ds__search-demo--interactive">
                  <input
                    className="geo-ds__search-input"
                    type="text"
                    placeholder="검색어를 입력해주세요."
                    aria-label="검색창 포커스 상태 체험"
                  />

                  <button
                    type="button"
                    className="geo-ds__search-btn"
                    aria-label="검색 버튼 디자인 체험"
                    onClick={(event) => {
                      event.currentTarget.previousElementSibling?.focus();
                    }}
                  />
                </div>

                {/* 기존 Focus 디자인 비교 예시 */}
                <div className="geo-ds__search-demo geo-ds__search-demo--focus">
                  <span className="geo-ds__cursor" />

                  <img src={`${iconPath}search-icon.png`} alt="" />
                </div>
              </div>

              <p className="geo-ds__component-caption">
                ▲ Search Bar (Default/Focus)
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default GeoDesignSystem;

import "./About.css";

function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about__layout">
        <div className="about__content">
          <p className="about__eyebrow">About ME</p>

          <h2 id="about-title" className="about__title">
            도시를 설계하던 시선으로,
            <br />
            웹을 설계합니다.
          </h2>

          <img
            className="about__accent"
            src="assets/about-accent.svg"
            alt=""
            aria-hidden="true"
            width="85"
            height="10"
          />

          <p className="about__intro">
            도시공학을 전공하며 ‘WELL-BEING’ 프로젝트를 통해 주거부적합 지역인
            인천 사월마을의 문제를 분석하고, 건강도시 관점에서 도시의 회복
            방향을 기획, 설계했습니다. 설계안으로 지역사회동행 프로그램에
            선정되었고, 이후 공무원과 주민을 직접 만나 서로 다른 관점과 현실적인
            제약을 이해할 수 있었습니다. 이 작품은 2025년 한국경관학회 학생작품
            공모전에서 최우수상을 수상했습니다.
          </p>

          <img
            className="about__divider"
            src="assets/about-divider.svg"
            alt=""
            aria-hidden="true"
            width="85"
            height="2"
          />

          <p className="about__closing">
            복잡한 문제를 체계화하는 구조적 사고는, 웹에서도 그대로 작동합니다.
            사용자의 숨은 맥락을 파악하고 정보의 위계를 바로 잡는 방식으로, 도시
            설계와 같은 접근으로 웹 문제를 풀어나갑니다.
          </p>
        </div>

        <div className="about__visual">
          <img
            src="assets/about-art.png"
            alt="노란색과 베이지색의 건축 구조물, 계단과 원형 요소를 조합한 추상 일러스트"
            width="704"
            height="705"
          />
        </div>
      </div>
    </section>
  );
}

export default About;

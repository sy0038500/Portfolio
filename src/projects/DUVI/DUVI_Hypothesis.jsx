import './DUVI_Hypothesis.css';

const hypotheses = [
  {
    number:'01', title:'빠른 현황 파악',
    description:'행정동별 도시활력을 지도 위에 색상과 등급으로 표현하면, 사용자는 서울 지역의 전반적인 차이를 빠르게 파악할 수 있을 것이다.',
    image:'assets/DUVI/pro3_uxhypo1.png', alt:'서울시 행정동별 도시활력 지도',
  },
  {
    number:'02', title:'선택을 통한 이해',
    description:'관심 지역의 종합점수와 분야별 정보를 한 화면에서 확인할 수 있다면, 사용자는 지역의 특징과 점수의 근거를 쉽게 이해할 수 있을 것이다.',
    image:'assets/DUVI/pro3_uxhypo2.png', alt:'선택 지역의 도시활력 정보 패널',
  },
  {
    number:'03', title:'목적에 맞는 비교·탐색',
    description:'연도와 분야를 선택할 수 있다면, 사용자는 자신이 중요하게 생각하는 조건을 중심으로 여러 지역의 연도별 추이를 비교할 수 있을 것이다.',
    image:'assets/DUVI/pro3_uxhypo3.png', alt:'연도 및 분야 필터 화면',
  },
];

export default function DUVI_Hypothesis(){
  return (
    <section className="duvi-hypothesis" aria-labelledby="duvi-hypothesis-title">
      <h2 id="duvi-hypothesis-title" className="duvi-hypothesis__eyebrow">Core UX Hypothesis</h2>
      <div className="duvi-hypothesis__problem">
        <div className="duvi-hypothesis__person duvi-hypothesis__person--left">
          <img src="assets/DUVI/persona1.png" alt="" loading="lazy" />
          <p>PERSONA 01<br />이직을 앞둔 28세 직장인<br /><br />교통 · 주거 · 안전</p>
        </div>
        <div className="duvi-hypothesis__common">
          <h3>COMMON PROBLEM</h3>
          <p>서로 중요하게 생각하는 조건은 다르지만,<br />여러 지역정보를 한눈에 비교하기 어렵다는<br />공통된 불편을 가지고 있습니다.</p>
        </div>
        <div className="duvi-hypothesis__person duvi-hypothesis__person--right">
          <img src="assets/DUVI/persona2.png" alt="" loading="lazy" />
          <p>PERSONA 02<br />새 거주지를 찾는 40세 학부모<br /><br />교육 · 문화 · 생활 인프라</p>
        </div>
      </div>
      <div className="duvi-hypothesis__stem" aria-hidden="true" />
      <div className="duvi-hypothesis__thesis">
        <h3>CORE HYPOTHESIS</h3>
        <p>사용자가 자신의 목적에 맞는 도시정보를<br />한 화면에서 탐색하고 지역 간 차이를 비교할 수 있다면,<br />낯선 지역을 선택하는 과정의 불안과<br />정보 탐색의 부담을 줄일 수 있을 것이다.</p>
      </div>
      <div className="duvi-hypothesis__cards">
        {hypotheses.map(item=>(
          <article className="duvi-hypothesis__card" key={item.number}>
            <div className="duvi-hypothesis__image"><img src={item.image} alt={item.alt} loading="lazy" /></div>
            <h4>{item.number} {item.title}</h4>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

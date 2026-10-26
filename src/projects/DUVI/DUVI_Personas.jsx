import "./DUVI_Personas.css";

const personas = [
  {
    id: "first",
    eyebrow: "Persona / User Context",
    name: "28세 직장인",
    summary: "이직을 계기로 새로운 거주지역을 탐색하는 1인 가구",
    context:
      "직장이 구로구로 변경되어 출퇴근이 편리한 지역으로 이사를 준비하고 있습니다. 익숙하지 않은 지역이다 보니 대중교통과 주거비뿐 아니라 안전과 주변 생활환경도 함께 확인하고 싶습니다.",
    question:
      "출퇴근이 편리하면서도 안심하고 생활할 수 있는 지역을 한눈에 비교할 수 없을까?",
    needs: "대중교통, 주거비, 안전 관련 정보",
    pain: "여러 서비스를 오가며 정보를 반복해서 검색해야 함",
    goal: "통근과 생활에 적합한 지역을 빠르게 비교해 이사 후보지를 정하고 싶음",
    image: "/assets/DUVI/persona1.png",
  },
  {
    id: "second",
    eyebrow: "Persona / User Context",
    name: "40세 학부모",
    summary: "전세 계약 만료를 앞두고 가족의 새 거주지를 찾는 사용자",
    context:
      "현재 거주 중인 집의 전세 계약이 끝나가면서 가족이 함께 생활할 새로운 지역을 알아보고 있습니다. 자녀가 다닐 수 있는 학교가 충분하고, 문화시설과 생활 인프라도 잘 갖춰진 지역을 찾고 싶습니다.",
    question: "여러 동네의 교육과 생활환경을 함께 비교할 수는 없을까?",
    needs: "교육시설, 문화시설, 생활 인프라",
    pain: "가족에게 필요한 조건을 한곳에서 종합적으로 비교하기 어려움",
    goal: "교육과 생활환경이 균형 있게 갖춰진 지역을 찾고 싶음",
    image: "/assets/DUVI/persona2.png",
  },
];

function PersonaSection({ persona }) {
  return (
    <section
      className={`duvi-persona duvi-persona--${persona.id}`}
      aria-label={`${persona.name} 사용자 맥락`}
    >
      {persona.id === "first" && (
        <h2 className="duvi-persona__eyebrow">{persona.eyebrow}</h2>
      )}
      <div className="duvi-persona__panel">
        <div className="duvi-persona__top">
          <h3>
            {persona.name}
            <span>{persona.summary}</span>
          </h3>
          <p>{persona.context}</p>
        </div>
        <div className="duvi-persona__question">
          <h4>Key Question</h4>
          <blockquote>“ {persona.question} ”</blockquote>
        </div>
        <div className="duvi-persona__bottom">
          <div>
            <strong>Needs</strong>
            <p>{persona.needs}</p>
          </div>
          <div>
            <strong>Pain Point</strong>
            <p>{persona.pain}</p>
          </div>
          <div>
            <strong>Goal</strong>
            <p>{persona.goal}</p>
          </div>
        </div>
        <img
          className="duvi-persona__image"
          src={persona.image}
          alt={
            persona.id === "first"
              ? "노트북을 사용하는 직장인 일러스트"
              : "노트북을 사용하는 가족 일러스트"
          }
          loading="lazy"
        />
      </div>
    </section>
  );
}

export function DUVI_Persona1() {
  return <PersonaSection persona={personas[0]} />;
}
export function DUVI_Persona2() {
  return <PersonaSection persona={personas[1]} />;
}

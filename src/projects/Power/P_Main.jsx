import "./P_Main.css";

export default function P_Main() {
  return (
    <section
      className="p-main"
      aria-labelledby="p-main-title"
    >
      <h2 id="p-main-title" className="p-main__title">
        Main Design
      </h2>

      <img
        className="p-main__image"
        src="assets/Power/P_MainDesign.png"
        alt="RETRO CELL CLUB 랜딩페이지의 데스크톱, 노트북, 태블릿, 모바일 반응형 디자인 목업"
      />
    </section>
  );
}

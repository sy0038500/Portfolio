import DUVI_Cover from "./DUVI_Cover";
import DUVI_Background from "./DUVI_Background";
import { DUVI_Persona1, DUVI_Persona2 } from "./DUVI_Personas";
import DUVI_Hypothesis from "./DUVI_Hypothesis";
import DUVI_UXStrategy from "./DUVI_UXStrategy";
import DUVI_DesignSystem from "./DUVI_DesignSystem";
import DUVI_MainDesign from "./DUVI_MainDesign";
import DUVI_MainFeatures from "./DUVI_MainFeatures";
import DUVI_Implementation from "./DUVI_Implementation";
import DUVI_ResultReview from "./DUVI_ResultReview";
import DUVI_Ending from "./DUVI_Ending";
import "./DUVI_Spacing.css";

export default function DUVI_Page() {
  return (
    <main className="duvi-page">
      <DUVI_Cover />
      <DUVI_Background />
      <DUVI_Persona1 />
      <DUVI_Persona2 />
      <DUVI_Hypothesis />
      <DUVI_UXStrategy />
      <DUVI_DesignSystem />
      <DUVI_MainDesign />
      <DUVI_MainFeatures />
      <DUVI_Implementation />
      <DUVI_ResultReview />
      <DUVI_Ending />

      {/* 앞으로 DUVI 프로젝트 섹션 추가 */}
    </main>
  );
}

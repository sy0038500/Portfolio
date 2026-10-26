import P_Cover from "./P_Cover";
import P_Background from "./P_Background";
import P_Hypothesis from "./P_Hypothesis";
import P_Strategy from "./P_Strategy";
import P_Main from "./P_Main";
import P_Showcase from "./P_Showcase";
import P_Review from "./P_Review";
import P_Ending from "./P_Ending";
import CustomCursor from "./CustomCursor";
import ClickSpark from "./ClickSpark";
import "./P_Interaction.css";
import "./P_Spacing.css";

export default function P_Page() {
  return (
    <main className="p-page">
      <CustomCursor />

      <ClickSpark>
        <P_Cover />
        <P_Background />
        <P_Hypothesis />
        <P_Strategy />
        <P_Main />
        <P_Showcase />
        <P_Review />
        <P_Ending />

        {/* 다음 Power 섹션은 여기에 추가 */}
      </ClickSpark>
    </main>
  );
}

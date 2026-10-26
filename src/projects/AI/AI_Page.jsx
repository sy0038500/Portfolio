import AI_Cover from "./AI_Cover";
import AI_Background from "./AI_Background";
import AI_Hypothesis from "./AI_Hypothesis";
import AI_UXStrategy from "./AI_UXStrategy";
import AI_MainDesign from "./AI_MainDesign";
import AI_FeaturesFlow from "./AI_FeaturesFlow";
import AI_MoodTheme from "./AI_MoodTheme";
import AI_ResultReview from "./AI_ResultReview";
import AI_ProjectReview from "./AI_ProjectReview";
import AI_Ending from "./AI_Ending";
import "./AI_Spacing.css";

export default function AI_Page() {
  return (
    <main className="ai-page">
      <AI_Cover />
      <AI_Background />
      <AI_Hypothesis />
      <AI_UXStrategy />
      <AI_MainDesign />
      <AI_FeaturesFlow />
      <AI_MoodTheme />
      <AI_ResultReview />
      <AI_ProjectReview />
      <AI_Ending />
    </main>
  );
}

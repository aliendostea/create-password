import { BoxRadioButtons } from "@/components/BoxRadioButtons";
import { FormItems } from "@/components/FormItems";
import { passwordStrength } from "@/const";

import "./Home2.css";

export default function Home2() {
  return (
    <div className="home2">
      <h3>Create your new password</h3>

      <FormItems />

      <BoxRadioButtons passwordStrengthLevels={passwordStrength} />
    </div>
  );
}

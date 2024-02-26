import Home2 from "./pages/Home2";
import { InputErrorProvider } from "./store/InputErrorProvider";
import { PasswordStrengthProvider } from "./store/PasswordStrengthProvider";
import "./index.css";

const App = () => {
  return (
    <PasswordStrengthProvider>
      <InputErrorProvider>
        <Home2 />
      </InputErrorProvider>
    </PasswordStrengthProvider>
  );
};

export default App;

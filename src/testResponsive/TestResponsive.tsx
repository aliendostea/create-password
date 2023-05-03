import { useState } from "react";
import { ResponsiveStyle } from "./TestResponsive.style";

const TestResponsive = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(false);
  };

  if (isActive) {
    return (
      <ResponsiveStyle>
        Test__Responsive
        <button onClick={handleClick}>
          <span className="material-symbols-rounded">cancel</span>
        </button>
      </ResponsiveStyle>
    );
  }

  return null;
};

export default TestResponsive;

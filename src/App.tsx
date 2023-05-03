import { Home } from "./pages";
import { BoxContainer, ContainerGrid, GlobalStyles } from "./styles";

const App = () => {
  return (
    <ContainerGrid>
      <GlobalStyles />
      <BoxContainer>
        <Home />
      </BoxContainer>
    </ContainerGrid>
  );
};

export default App;

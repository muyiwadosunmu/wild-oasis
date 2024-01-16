import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const StyledApp = styled.div`
  background-color: #eeeceb;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Button>Click Me</Button>
        <H1>The Wild Oasis</H1>
        <Input placeholder="Fill in the form" />
      </StyledApp>
    </>
  );
}

export default App;

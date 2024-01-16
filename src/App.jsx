import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

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
        <Heading as="h1">The Wild Oasis</Heading>
        <Input placeholder="Fill in the form" />
        <Heading as="h2">Check In and Outs</Heading>
        <Button>Click Me</Button>
        <Heading as="h3">Form</Heading>
      </StyledApp>
    </>
  );
}

export default App;

import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;
const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <Input placeholder="Fill in the form" />
    </StyledApp>
  );
}

export default App;

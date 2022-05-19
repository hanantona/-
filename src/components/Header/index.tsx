import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
  flex
  justify-evenly
`}
`;


export const Header = () => {
  return (
      <Container>
        <img src="./assets/logos/logo.png" />
        <img src="./assets/logos/logo__center.png" />
      </Container>
  );
};

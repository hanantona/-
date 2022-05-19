import { Header } from "components/Header";
import { Navbar } from "components/Navbar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";


const FlexContainer = styled.div`
  ${tw`
  flex
  justify-evenly
  mt-8
  ml-12
  `}
`;

export function Home() {
  return (
      <>
        <Header />
      <FlexContainer>
        <Navbar />
        <Outlet />
      </FlexContainer>
      </>
  );
};

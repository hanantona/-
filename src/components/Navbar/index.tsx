import { NavLink } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.ul`
background: linear-gradient(180.32deg, #85B0FA 47.71%, rgba(52, 225, 194, 0) 124.62%);
  ${tw`
  px-[33px]
  py-[50px]
  mr-8
`}
`;

const Content = styled.li`

border: 3px solid #7879F1;
border-radius: 15px;
background: #AFCDFB;
width: 221px;
height: 400px;
margin-bottom: 24px;
justify-content: center;
  ${tw`
  flex
  flex-col
`}
`;


export const Navbar = () => {
  return (
    <Container>
      <Content>

      <NavLink 
      style={{background: "#AFCDFB", 
      border: "3px solid #7879F1",
      margin: "15px",
      textAlignLast: "center",
      borderRadius: "15px"
    }} 
      to={"/"}>Ваши жалобы</NavLink>
      <NavLink 
      style={{background: "#AFCDFB", 
      border: "3px solid #7879F1",
      margin: "15px",
      textAlignLast: "center",
      borderRadius: "15px"
    }} 
      to={"/about"}>О больнице</NavLink>
      <NavLink 
      style={{background: "#AFCDFB", 
      border: "3px solid #7879F1",
      margin: "15px",
      textAlignLast: "center",
      borderRadius: "15px"
    }} 
      to={"/doctor"}>Наши врачи</NavLink>
      <NavLink 
      style={{background: "#AFCDFB", 
      border: "3px solid #7879F1",
      margin: "15px",
      textAlignLast: "center",
      borderRadius: "15px"
    }} 
      to={"/geo"}>Местоположение</NavLink>
      <NavLink 
      style={{background: "#AFCDFB", 
      border: "3px solid #7879F1",
      margin: "15px",
      textAlignLast: "center",
      borderRadius: "15px"
    }} 
      to={"/contact"}>Контакты</NavLink>
      </Content>
    </Container>
  );
};

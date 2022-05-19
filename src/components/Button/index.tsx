import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import tw from "twin.macro";


const ButtonForNavbar = styled.button`
  ${tw`
  `}
`;

const ButtonForForm = styled.button`
color: #233862;
font-size: 17px;
border: 1px solid #3F40F5;
border-radius: 20px;
margin-left: 1rem;
margin-bottom: 2.2rem;
padding: 0.8rem 1rem;
cursor: pointer;
overflow: hidden;
background-color: transparent;
  ${tw`
  `}
`;


export const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  theme?: string;
  onClick: React.EventHandler<any>;
}> = ({ onClick, children, className, theme = "default" }) => {
  if (theme === "form") {
    return <ButtonForForm onClick={onClick} type="submit">{children}</ButtonForForm>;
  }
  return <ButtonForNavbar className={className}>{children}</ButtonForNavbar>;
};

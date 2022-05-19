import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const InputContainer = styled.label`

        font-size: 26px;
        color: #786CFE;
        // border-bottom: 2px solid currentColor;
        text-align: center;
  ${tw`
  ml-6
  flex
  flex-wrap
  items-center
  justify-between
  `}
`;

const InputArea = styled.input`
margin: 7px 50px;
width: 663px;
height: 50px;
border-radius: 15px;
font-size: 26px;
opacity: 58%;
border: none;
  ${tw`
  `}
`;

export const CustomInput: React.FC<{
    label: React.ReactNode;
    type: string;
    name: string;
    value: string | ReadonlyArray<string> | number | undefined;
    onChange: React.ChangeEventHandler | any;
  }> = ({ label, onChange, type, name, value }) => {

    return (
    <InputContainer>{label} 
      <InputArea 
        onChange={(e: any) => onChange(e.target.value)} 
        value={value} 
        name={name} 
        type={type}
      />  
    </InputContainer>
    );
  };
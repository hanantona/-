import { Doctor } from "interfaces";
import styled from "styled-components";
import tw from "twin.macro";


const Name = styled.p`
  ${tw`
  mt-4
  `}
`;

const Family = styled.p`
  ${tw`
  `}
`;

const Lastname = styled.p`
  ${tw`
  `}
`;

const Job = styled.p`
  ${tw`
  `}
`;

const Speciality = styled.p`
  ${tw`
  `}
`;

const Bot = styled.div`
border-bottom: 1px solid currentColor;
  ${tw`
  `}
`;


export const DoctItem: React.FC<Doctor> = 
({doctor_surname, doctor_name, doctor_lastname,
doctor_stag, doctor_spesialization}) => {
    return (
    <>
      <div className="ml-4">
      <Name>
        Имя {doctor_name}
      </Name>
      <Family>
        Фамилия {doctor_surname}
      </Family>
      <Lastname>
        Отчество {doctor_lastname}
      </Lastname>
      <Job>
        Стаж {doctor_stag}
      </Job>
      <Speciality>
        Специализация врача {doctor_spesialization}
      </Speciality>
      </div>
      <Bot />
    </>
  );
};

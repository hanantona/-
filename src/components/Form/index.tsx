import axios from "axios";
import { Button } from "components/Button";
import { CustomInput } from "components/customInput";
import { Client } from "interfaces";
import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const FormContainer = styled.form`
background-image: url(/assets/logos/background.png);
    background-repeat: no-repeat;
    background-size: 100%;
    width: 989px;
    height: 547px;
  ${tw`
  `}
`;

const Text = styled.div`
border: 1px solid #C4C4C4;
text-align: center;
width: 713px;
height: 80px;
margin-top: 0.3rem;
margin-left: 8rem;
margin-top: 1rem;
            font-size: 26px;
            color: #233862;
            font-weight: 500;
border-radius: 20px;
  ${tw`
  `}
`;


export const Form: React.FC = () => {

  const InitialState = {
    client_name: '',
    client_surname: '',
    client_phonenumber: '',
    client_tempreture: 0,
    client_addres: '',
    client_jaloby: '',
    client_gol_bol: '',
  }

  const [client, setClient] = useState<Client>(InitialState);

  const handleClient = (fieldName: string) => (fieldValue: any) => {
    setClient({         
              ...client,
            [fieldName]: fieldValue
      });
};

const SubmitHandler = (e: any) => {
  e.preventDefault();
  axios.post('http://api/save', client).then(function(response){
    console.log(response.data)
  });
};

  return (
    <FormContainer>
      <Text>Заполните форму, мы постараемся узнать Вашу болезнь и отправим данные в больницу</Text>
        <CustomInput 
          label={"Имя"}
          type={"text"}
          name={"client_name"} 
          value={client?.client_name} 
          onChange={handleClient('client_name')} 
        />
        <CustomInput 
          label={"Фамилия"}
          type={"text"}
          name={"client_surname"} 
          value={client?.client_surname} 
          onChange={handleClient('client_surname')} 
        />
        <CustomInput 
          label={"Номер телефона"}
          type={"tel"}
          name={"client_phonenumber"} 
          value={client?.client_phonenumber} 
          onChange={handleClient('client_phonenumber')} 
        />
        <CustomInput 
          label={"Адрес"}
          type={"text"}
          name={"card_addres"} 
          value={client?.client_addres} 
          onChange={handleClient('client_addres')} 
        />
        <CustomInput 
          label={"t°С"}
          type={"text"}
          name={"card_tempreture"} 
          value={client?.client_tempreture} 
          onChange={handleClient('client_tempreture')} 
        />
        <CustomInput 
          label={"Жалобы"}
          type={"text"}
          name={"card_jaloby"} 
          value={client?.client_jaloby} 
          onChange={handleClient('client_jaloby')} 
        />
        <CustomInput 
          label={"Гол.боль"}
          type={"text"}
          name={"card_gol_bol"} 
          value={client?.client_gol_bol} 
          onChange={handleClient('client_gol_bol')} 
        />
        <div className="flex justify-end mt-5 mr-10">

        <Button onClick={SubmitHandler} theme="form">Отправить</Button>
        </div>
    </FormContainer>
  );
};

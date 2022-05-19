import axios from "axios";
import { DoctItem } from "components/doctItem";
import { Doctor } from "interfaces";
import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";


const Container = styled.div`
font-size: 20px;
border: 1px solid #7879F1;
box-sizing: border-box;
border-radius: 15px;
width: 989px;
background-image: url(/assets/logos/background.png);
  ${tw`
  `}
`;

export function Doctors() {

  const [doct, setDoct] = useState<Doctor[]>([])

  async function fetchDoctors() {
    try{
      const response = await axios.get('http://api/')
      setDoct(response.data)
      console.log(response)
    } catch(e) {
      console.log(e)
    }
  };

  useEffect(() => {
    fetchDoctors();
    console.log(doct)
  }, []);

  return (
    <Container>
      {doct.map(item => {
        return (
          <DoctItem key={item.doctor_id} {...item} />
        )
      })}
    </Container>
  );
};

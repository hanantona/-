import styled from "styled-components";
import tw from "twin.macro";


const Container = styled.div`
font-size: 36px;
border: 1px solid #7879F1;
box-sizing: border-box;
border-radius: 15px;
width: 989px;
background-image: url(/assets/logos/background.png);
  ${tw`

  `}
`;

const Title = styled.h2`
font-size: 36px;
border: 1px solid #7879F1;
box-sizing: border-box;
border-radius: 15px;
margin-top: 1rem;
padding: 0.5rem 0rem 0.5rem 0rem;
  ${tw`
  text-center
  w-4/12
  ml-[25rem]
  `}
`;

const Content = styled.div`
font-size: 24px;
color: #7879F1;
padding: 38px 77px 0px 74px;
font-weight: 500;
text-indent: 1.5em;
  ${tw`
  flex
  justify-center
  `}
`;

const Text = styled.p`
  ${tw`
  w-5/12
  `}
`;

const Descr = styled.p`
  ${tw`
  `}
`;

export function Contact() {
  return (
      <Container>
        <Title>Контакты</Title>
        <Content>
          <Text>
          Телефон справочной:
          </Text>
          <Descr>8-927-882-91-05</Descr>
        </Content>
        <Content>
          <Text>
          Телефон регистратуры:
          </Text>
          <Descr>8-900-456-90-09</Descr>
        </Content>
        <Content>
          <Text>
          Телефон выездного врача:
          </Text>
          <Descr>8-900-300-60-55</Descr>
        </Content>
      </Container>
  );
};

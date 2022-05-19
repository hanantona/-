import styled from "styled-components";
import tw from "twin.macro";


const Conteiner = styled.div`
font-size: 36px;
border: 1px solid #7879F1;
box-sizing: border-box;
width: 989px;
border-radius: 15px;
padding: 0.5rem 0rem 0.5rem 0rem;
background-image: url(/assets/logos/background.png);
  ${tw`
  flex
  flex-col
  text-center
  `}
`;

const Title = styled.h2`
font-size: 29px;
color: #7879F1;
font-weight: 500;
text-indent: 1.5em;
  ${tw`
  text-center
  mt-8
  `}
`;

const Text = styled.p`
display: flex;
justify-content: space-evenly;
color: #7879F1;
font-size: 24px;
font-weight: 500;
  ${tw`
  mx-8
  `}
`;

export function About() {
  return (
      <Conteiner>
        <Title>О больнице</Title>
        <Text>Поликлиника оказывает первичную медико-санитарную помощь и первичную специализированную помощь детскому и взрослому населению по следующим профилям: терапия, педиатрия, офтальмология, хирургия, неврология, акушерство-гинекология, оториноларингология. Имеется возможность рентгенологической, в том числе флюорографической, лабораторной, функциональной, ультразвуковой, эндоскопической диагностики заболеваний. Поликлиника оснащена в соответствии со стандартами оснащения, необходимым современным новейшим оборудованием.</Text>
      </Conteiner>
  );
};

import styled from "styled-components";
import tw from "twin.macro";
import { YMaps, Map, Placemark } from "react-yandex-maps";


const FlexContainer = styled.div`
width: 988px;
height: 550px;
${tw`
`}
`;

export function Geo() {

  const mapData = {
    center: [55.79216266722981, 49.124007124227646],
    zoom: 14,
  };
  

  return (
      <FlexContainer>
       <YMaps>
          <Map width={"988px"} height={"550px"} defaultState={mapData}>
            <Placemark
              modules={["geoObject.addon.balloon"]}
              geometry={[55.784982573703395, 49.11010255269445]}
              properties={{
                balloonContentHeader: "Общий прием",
                balloonContent: "Общий прием"
              }}
              />
              <Placemark
              modules={["geoObject.addon.balloon"]}
              geometry={[55.79262356238208, 49.11765565328037]}
              properties={{
                balloonContentHeader: "Прием инфекционных больных",
                balloonContent: "Прием инфекционных больных"
              }}
              />
              <Placemark
              modules={["geoObject.addon.balloon"]}
              geometry={[55.784837477091585, 49.13945664815341]}
              properties={{
                balloonContentHeader: "Здания сдачи анализов",
                balloonContent: "Здания сдачи анализов"
              }}
              />
          </Map>
        </YMaps>
      </FlexContainer>
  );
};

import styled from "styled-components";
import tw from "twin.macro";
import { Layout } from "components/Layout";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "components/Navbar";
import { Home } from "Page/Home/Index";
import { Form } from "components/Form";
import { About } from "Page/About";
import { Contact } from "Page/Contact";
import { Doctors } from "Page/Doctor";
import { NotFound } from "Page/404";
import { Geo } from "Page/Geo";

const FlexContainer = styled.div`
  ${tw`
  flex
  flex-col
  lg:flex-row
  `}
`;

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctor" element={<Doctors />} />
          <Route path="/geo" element={<Geo />} />
          <Route path="/404" element={<NotFound />} />
        </Route>
      </Routes>
  );
};

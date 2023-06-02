import styled from "styled-components";
import { useState } from "react";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";

const About = () => {
  const [bright, setBright] = useState(false);

  return (
    <InfoSection
      style={{
        background: bright ? "#343e3d" : "#F1DABF",
      }}
    >
      <Linkoption
        style={{
          background: bright ? "#343e3d" : "#F1DABF",
        }}
      >
        <LinkItem to="/" style={{ color: bright ? "white" : "#343e3d" }}>
          Home
        </LinkItem>
        <LinkItem
          to="/about"
          style={{
            color: bright ? "white" : "#343e3d",
          }}
        >
          {" "}
          About{" "}
        </LinkItem>
        <LinkItem
          to="/project"
          style={{
            color: bright ? "white" : "#343e3d",
          }}
        >
          Projects{" "}
        </LinkItem>
        <LinkItem
          to="/Contact"
          style={{
            color: bright ? "white" : "#343e3d",
          }}
        >
          Contact{" "}
        </LinkItem>
      </Linkoption>
      <Name
        style={{
          color: bright ? "white" : "#343e3d",
        }}
      >
        Samaneh Mousavi
      </Name>
      <Info
        style={{
          color: bright ? "white" : "#343e3d",
        }}
      >
        I build responsive websites that work across any platforms with a focus
        on user experience, design and functionality. My experience in project
        management will be an additional asset that I can offer to you in our
        projects. Let's define the scope together.
      </Info>
      <Toggle
        checked={bright}
        handleChange={() => {
          setBright(!bright);
        }}
      />
    </InfoSection>
  );
};

export default About;

const InfoSection = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 100px;
`;
const Linkoption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  top: 0;
  margin: 20px;
`;
const LinkItem = styled(Link)`
  text-decoration: none;
  padding: 5px;
  color: #343e3d;

  &:active {
    text-decoration: underline;
  }
`;

const Name = styled.div`
  font-size: 30px;
  display: block;
  text-align: center;
`;

const Info = styled.div`
  font-size: 35px;
  display: block;
  padding: 50px;
  margin: 20px;
`;

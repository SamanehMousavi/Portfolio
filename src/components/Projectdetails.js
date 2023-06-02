import { useContext } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./AppContext";
import { Container } from "./Styles";

const Projectdetails = () => {
  const { projectId } = useParams();
  const { projects } = useContext(AppContext);

  return (
    <Container>
      <InfoSection>
        <Linkoption>
          <LinkItem to="/"> Home </LinkItem>
          <LinkItem to="/about"> About </LinkItem>
          <LinkItem to="/project">Projects </LinkItem>
          <LinkItem to="/Contact">Contact </LinkItem>
        </Linkoption>
        <Name>Project Description</Name>
        <ProjectInfo>
          <ProjectName to={projects[projectId - 1].projectURL}>
            {projects[projectId - 1].name}
          </ProjectName>
          <ProjectDescription>
            {projects[projectId - 1].description}
          </ProjectDescription>
          <ProjectImage src={projects[projectId - 1].imageSrc} />
        </ProjectInfo>
      </InfoSection>
    </Container>
  );
};
export default Projectdetails;

const InfoSection = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  background-color: #f1dabf;
  color: #343e3d;
`;

const ProjectName = styled(NavLink)`
  font-size: 30px;
  display: block;
  padding: 20px;
  color: #343e3d;
`;

const ProjectDescription = styled.div`
  font-size: 30px;
  display: block;
  padding: 20px;
  color: #343e3d;
`;

const ProjectInfo = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

const ProjectImage = styled.img`
  border: 10px solid #343e3d;
`;

const Name = styled.div`
  font-size: 40px;
  display: block;
  text-align: center;
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

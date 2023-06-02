import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./AppContext";
import { Container } from "./Styles";

const Projects = () => {
  const { projects } = useContext(AppContext);
  return (
    <Container>
      <InfoSection>
        <Linkoption>
          <LinkItem to="/"> Home </LinkItem>
          <LinkItem to="/about"> About </LinkItem>
          <LinkItem to="/project">Projects </LinkItem>
          <LinkItem to="/contact">Contact </LinkItem>
        </Linkoption>
        <Name>Projects</Name>
        <ProjectInfo>
          {projects.map((project) => {
            return (
              <ProjectLink to={`/project/${project.id}`}>
                <ProjectName>{project.name}</ProjectName>
                <ProjectImage src={project.imageSrc} />
              </ProjectLink>
            );
          })}
        </ProjectInfo>
      </InfoSection>
    </Container>
  );
};

export default Projects;

const InfoSection = styled.div`
  height: 100%;
  width: 100vw;
  margin: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  background-color: #f1dabf;
  color: #343e3d;
`;

const ProjectName = styled.div`
  font-size: 30px;
  display: block;
  padding: 20px;
  color: #343e3d;
`;
const ProjectLink = styled(Link)`
  text-decoration: none;
`;

const ProjectInfo = styled.div`
  height: 100%;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 100px;
`;

const ProjectImage = styled.img`
  border: 10px solid #343e3d;
`;

const Name = styled.h1`
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

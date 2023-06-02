import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./Styles";

const Contact = () => {
  return (
    <Container>
      <InfoSection>
        <Linkoption>
          <LinkItem to="/"> Home </LinkItem>
          <LinkItem to="/about"> About </LinkItem>
          <LinkItem to="/project">Projects </LinkItem>
          <LinkItem to="/contact">Contact </LinkItem>
        </Linkoption>

        <ContactMe>
          <ContactInfo>
            <Contacttext>Contact Me</Contacttext>
            <Name>Samaneh Mousavi</Name>
            <ContactEmail>sama.mousavi@gmail.com</ContactEmail>
          </ContactInfo>
          <ContactForm>
            <label>First Name</label>
            <input type="text" style={{ fontSize: 20 }} />
            <label>Last Name</label>
            <input type="text" style={{ fontSize: 20 }} />
            <label>Email</label>
            <input type="text" style={{ fontSize: 20 }} />
            <label>Message</label>
            <input type="text" style={{ fontSize: 100 }} />
            <Submitform type="submit">Send</Submitform>
          </ContactForm>
        </ContactMe>
      </InfoSection>
    </Container>
  );
};
export default Contact;

const InfoSection = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  background-color: #f1dabf;
  color: #343e3d;
`;
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  margin-left: 50px;
  gap: 40px;
`;
const ContactMe = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 500px);
`;
const Contacttext = styled.div`
  font-size: 40px;
`;
const ContactEmail = styled.div`
  font-size: 20px;
`;
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-right: 50px;
  gap: 10px;
`;
const Submitform = styled.button`
  margin: 20px;
  display: block;
  font-size: 20px;
  padding: 10px;
`;
const Name = styled.div`
  font-size: 30px;
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

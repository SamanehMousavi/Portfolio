import styled from "styled-components";
import { Container } from "./Styles";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";

import { useEffect, useState } from "react";
// import { Menu } from "@szhsin/react-menu";
import { Link } from "react-router-dom";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.title = "Samaneh's Portfolio";

    return () => {
      document.title = "Portfolio Section";
    };
  }, []);

  return (
    <>
      <Container>
        <Backgroundone>
          <Titleone>Scope</Titleone>
        </Backgroundone>
        <Backgroundtwo>
          <MenuIcon onClick={handleOpen}>
            <Icon icon={menu} size={50} />
            {open ? (
              <>
                <MenuItem to="/about"> About </MenuItem>
                <MenuItem to="/project">Projects </MenuItem>
                <MenuItem to="/contact">Contact </MenuItem>
              </>
            ) : null}
          </MenuIcon>
          <Titletwo>Scope</Titletwo>
        </Backgroundtwo>
      </Container>
    </>
  );
};

export default Hero;

const Backgroundone = styled.div`
  background-color: white;
  top: 0;
`;
const Backgroundtwo = styled.div`
  background: url("./assets/montreal.jpg");
  background-position: center;
  background-attachment: fixed;
  top: 100vh;
  color: white;
  clip: rect(0, auto, auto, 0);
  overflow: hidden;
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  -webkit-mask-image: -webkit-linear-gradient(top, #ffffff 0%, #ffffff 100%);
`;

const Titleone = styled.div`
  position: fixed;
  background: url("./assets/montreal.jpg");
  background-size: 100vw auto;
  background-position: center;
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  display: block;
  margin: auto;
  width: 100%;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
  text-transform: uppercase;
  font-size: 100px;
`;
const Titletwo = styled(Titleone)`
  text-fill-color: #f1dabf;
  -webkit-text-fill-color: #f1dabf;
  font-size: 100px;
  text-align: center;
  margin: auto;
  width: 100%;
  //transform: translateY(2px);
`;

const MenuIcon = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 20px;
  left: 25px;
  list-style: none;
  font-size: 20px;
  color: #f1dabf;
  list-style: none;
  text-transform: uppercase;
`;
const MenuItem = styled(Link)`
  text-decoration: none;
  padding: 5px;
  margin-left: 15px;
  color: #f1dabf;
`;

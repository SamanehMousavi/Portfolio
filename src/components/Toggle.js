import styled from "styled-components";

const Toggle = ({ checked, handleChange }) => {
  return (
    <Button checked={checked} onClick={handleChange}>
      <Ball checked={checked}></Ball>
    </Button>
  );
};

export default Toggle;

const Button = styled.button`
  height: 35px;
  width: 70px;
  border-radius: 100px;
  border: none;
  position: relative;
  transition: all 1s ease-in-out;
  background-color: ${(props) => (props.checked ? "grey" : "#9dbbae")};
`;

const Ball = styled.div`
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 50%;
  position: relative;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${({ checked }) => (checked ? "30px" : "0px")};
  transition: all 0.5s ease-in-out;
`;

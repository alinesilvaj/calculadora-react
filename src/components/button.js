import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 50px;
  font-size: 1.3em;
  border: none;
  background-color: rgba(255, 255, 255, 0.116);
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin: 2px;

&:hover {
background-color: rgba(255, 255, 255, 0.274);
}
`

const Button = ({ label, onClick }) => {
    return (
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    );
}

export default Button;
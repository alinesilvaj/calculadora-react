import styled from "styled-components";

export const InputContainer = styled.div`
input {
  font-size: 2em;
  height: 50px;
  text-align: right;
  border-radius: 5px;
  border: 1px solid black;
  background-color: lightgray;
  margin-bottom: 10px;
  padding: 0px 10px;
}
`

const Input = ({ value }) => {
    return (
        <InputContainer>
            <input value={value} />
        </InputContainer>
    );
}

export default Input;
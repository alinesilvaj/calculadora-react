import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: lightblue;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const Content = styled.div`
background-color: black;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
`
export const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const BtnRed = styled.button`
  width: 100%;
  height: 50px;
  font-size: 1.3em;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin: 2px;
  background-color: rgba(255, 0, 0, 0.836);

  &:hover {
  background-color: rgb(233, 54, 54);
  }
`
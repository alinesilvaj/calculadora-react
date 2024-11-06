import { Container, Content, Row, BtnRed } from "./styles";
import Input from "./components/input";
import Button from "./components/button";
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState('');

  const handleNumberClick = (num) => {
    setCurrentNumber(prev => `${prev}${num}`)
  };

  const handleOperatorClick = (op) => {
    setFirstNumber(currentNumber);
    setCurrentNumber('');
    setOperation(op);
  };

  const handleCalculate = () => {
    try {
      const result = eval(`${firstNumber}${operation}${currentNumber}`);

      if (!result) {
        alert('Conta inválida');
        return;
      }

      setCurrentNumber(result);
      setFirstNumber('');
      setOperation('');
    } catch (e) {
      alert('Conta inválida');
      handleClear();
      return;
    }
  };

  const handleClear = () => {
    setCurrentNumber('');
    setFirstNumber('');
    setOperation('');
  };

  return (
    <Container>
      <h1>
        Calculadora básica
      </h1>
      <Content>
        <Input value={`${firstNumber} ${operation} ${currentNumber}`} />
        <Row>
          <BtnRed onClick={handleClear}>C</BtnRed>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleNumberClick('7')} class="btn" />
          <Button label="8" onClick={() => handleNumberClick('8')} />
          <Button label="9" onClick={() => handleNumberClick('9')} />
          <Button label="^" onClick={() => handleOperatorClick('**')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleNumberClick('4')} />
          <Button label="5" onClick={() => handleNumberClick('5')} />
          <Button label="6" onClick={() => handleNumberClick('6')} />
          <Button label="&#247;" onClick={() => handleOperatorClick('/')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleNumberClick('1')} />
          <Button label="2" onClick={() => handleNumberClick('2')} />
          <Button label="3" onClick={() => handleNumberClick('3')} />
          <Button label="x" onClick={() => handleOperatorClick('*')} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleNumberClick('0')} />
          <Button label="+" onClick={() => handleOperatorClick('+')} />
          <Button label="-" onClick={() => handleOperatorClick('-')} />
          <BtnRed onClick={handleCalculate}>=</BtnRed>
        </Row>
      </Content>
    </Container>
  );
}

export default App;

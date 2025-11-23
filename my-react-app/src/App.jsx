import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim()) {
      setMessage(`Ви ввели: ${inputValue}`);
    } else {
      setMessage('Будь ласка, введіть текст');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleButtonClick();
  };

  return (
    <div className="app">
      <h1>React Components Demo</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Введіть текст..."
            onChange={handleInputChange}
            value={inputValue}
          />
          <div className="button-group">
            <Button
              text="Натисни мене"
              type="button"
              onClick={handleButtonClick}
            />
            <Button
              text="Відправити"
              type="submit"
              onClick={handleSubmit}
            />
          </div>
        </form>
        {message && <p className="message">{message}</p>}
        <div className="password-section">
          <h2>Приклад поля для паролю:</h2>
          <Input
            type="password"
            placeholder="Введіть пароль..."
            onChange={(e) => console.log('Password changed:', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;


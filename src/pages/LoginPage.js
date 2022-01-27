import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkInputs = () => {
    const MIN_LENGTH_PASSWORD = 6;
    if (email.includes('@') && email.includes('.com')
    && password.length > MIN_LENGTH_PASSWORD) return false;
    return true;
  };

  const handleButtonClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
  };

  return (
    <div>
      <input
        type="email"
        data-testid="email-input"
        onChange={ ({ target: { value } }) => setEmail(value) }
        value={ email }
      />
      <input
        type="password"
        data-testid="password-input"
        onChange={ ({ target: { value } }) => setPassword(value) }
        value={ password }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ checkInputs() }
        onClick={ handleButtonClick }
      >
        Enter
      </button>
    </div>
  );
};

export default LoginPage;

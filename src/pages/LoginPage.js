import React from 'react';

const LoginPage = () => (
  <div>
    <input
      type="email"
      data-testid="email-input"
    />
    <input
      type="password"
      data-testid="password-input"
    />
    <button type="button" data-testid="login-submit-btn">Enter</button>
  </div>
);

export default LoginPage;

import React, { useState } from 'react';
import './styles.css'; // Подключение CSS-файла

const LoginWindow = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberPasswordChange = (event) => {
    setRememberPassword(event.target.checked);
  };

  const handleLogin = () => {
    // Выполниение логики авторизации, используя введенные имя пользователя и пароль
    // Например, можно отправить запрос к серверу для проверки учетных данных

    console.log('Выполняется вход в систему...');
    console.log('Имя пользователя:', username);
    console.log('Пароль:', password);
    console.log('Запомнить пароль:', rememberPassword);

    // Сбросить значения полей ввода и состояния запоминания пароля
    setUsername('');
    setPassword('');
    setRememberPassword(false);
  };

  return (
    <div id="root">
      <div id="rectangle111"></div>
      <h1 id="loginText">Вход в систему</h1>
      <button className="rectangle115" onClick={handleLogin}>ВХОД</button>
      <a href="#" className="forgotPassword">Забыли свой пароль?</a>
      <div className="group">
        <input
          type="text"
          className="rectangle112"
          placeholder="Имя пользователя"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="group1">
        <input
          type="password"
          className="rectangle113"
          placeholder="Пароль"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <label>
        Запомнить пароль
        <input
          type="checkbox"
          checked={rememberPassword}
          onChange={handleRememberPasswordChange}
        />
        <span></span>
      </label>
    </div>
  );
};

export default LoginWindow;


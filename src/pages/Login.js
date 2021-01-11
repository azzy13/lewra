import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div class='login-page'>
      <div class='form'>
        <form class='login-form'>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>login</button>
          <p class='message'>
            Not registered?
            <Link to='/Register'> Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

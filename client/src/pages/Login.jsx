import { useState } from 'react';
// import the CSS file
import '../css/login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('accessToken', token); // Store the token in local storage
        // TODO: Redirect to the protected page
      } else {
        const { message } = await response.json();
        throw new Error(message);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
      <button type="submit" disabled={loading}>
        {loading ? 'Loading...' : 'Login'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login;
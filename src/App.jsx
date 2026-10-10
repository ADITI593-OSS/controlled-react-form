
import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [technology, setTechnology] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleTechnologyChange(event) {
    setTechnology(event.target.value);
  }

  return (
    <div className="container">
      <h1>Controlled React Form</h1>
      <p className="subtitle">
        Enter your details and see the live preview.
      </p>

      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="technology">
            Favorite Technology
          </label>
          <input
            id="technology"
            type="text"
            placeholder="e.g. React, Java, Python"
            value={technology}
            onChange={handleTechnologyChange}
          />
        </div>
      </form>

      <div className="preview">
        <h2>Live Preview</h2>
        <p>
          <strong>Username:</strong>{' '}
          {username || 'Not entered yet'}
        </p>
        <p>
          <strong>Favorite Technology:</strong>{' '}
          {technology || 'Not entered yet'}
        </p>
      </div>
    </div>
  );
}

export default App;

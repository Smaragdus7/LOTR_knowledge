import React from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

import { LoginButton } from './Login';
import { LogoutButton } from './Logout';
import { Profile } from './Profile';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
      <p>Login here</p>
      {isAuthenticated ? <>
        <Profile />
        <LogoutButton />
        </>
        :
        <LoginButton />
      }
      </header>
    </div>
  );
}
export default App;
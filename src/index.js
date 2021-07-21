import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider domain="dev-3mga0ky3.us.auth0.com" clientId="OsjaQrBhRUSXn2FMua3vTHXy0Eq2jh3i" redirectUri="window.location.origin"><App /></Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
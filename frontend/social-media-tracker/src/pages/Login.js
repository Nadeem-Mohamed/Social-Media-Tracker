import React from 'react';
import './login.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './google';

function login() {
  return (
    <div className="App">
      <header className="App-header">
        

        <GoogleOAuthProvider clientId="598251810358-o6mie5a7g6lpho39340coo9g7mlj2ved.apps.googleusercontent.com">
          <Google />
        </GoogleOAuthProvider>
      </header>
    </div>
  );
}

export default login;
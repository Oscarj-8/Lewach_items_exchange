import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Auth0Provider
    domain="dev-mzokpvkzqztwlcnq.us.auth0.com"
    clientId="kpjbbAiWIywEZLMIbuVvQPyuh5qRyFc9"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </BrowserRouter>,
)

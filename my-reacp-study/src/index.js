import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import UseStat from './PAGES/usaStat/index.js'
import ListRender from './PAGES/rendList/index.js'
import RendCondicional from './PAGES/conditionalRend/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <UseStat />
    <ListRender />
    <RendCondicional />

  </React.StrictMode>
);


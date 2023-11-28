import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserInfo from './components/user_infos';
import UserAbout from './components/user_aboutz';
import UserSocial from './components/user_socialz'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


function App(){
  return (
    <div className='app'>
      <UserInfo />
      <UserAbout />
      <UserSocial />
    </div>
  );
}

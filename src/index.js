import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserInfo from './components/user_infos';
import UserAbout1 from './components/user_about';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


function App(){
  return (
    <div className='app'>
      <UserInfo />
      <UserAbout1 />
    </div>
  );
}

import React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import './App.css';
import { useStateValue } from './StateProvider';
import Login from './components/Login';

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
};

export default App;

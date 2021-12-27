import React from 'react';
import { Button } from '@mui/material';
import '../css/Login.css';
import { useStateValue } from '../StateProvider';
import { auth, provider } from '../firebase';

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: 'SET_USER',
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg'
          alt='twitter logo'
        />
        <h2>Sign In to Twitter</h2>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;

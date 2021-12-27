import React from 'react';
import { Search } from '@mui/icons-material';
import '../css/Widgets.css';

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <Search className='widgets__search' />
        <input type='text' placeholder='Search Twitter' />
      </div>
      <div className='widgets__widgetContainer'>
        <h3>Work In Progress</h3>
      </div>
      <div className='widgets__footer'>
        <p>
          Terms of Service Privacy Policy Cookie Policy <br /> Accessibility Ads
          info More <br /> &copy; Twitter Clone.
        </p>
      </div>
    </div>
  );
};

export default Widgets;

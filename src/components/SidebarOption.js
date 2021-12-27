import React from 'react';
import '../css/SidebarOption.css';

const SidebarOption = ({ active, Icon, title }) => {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <Icon />
      <h2>{title}</h2>
    </div>
  );
};

export default SidebarOption;

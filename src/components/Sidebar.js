import React from 'react';
import {
  BookmarkBorder,
  Home,
  ListAlt,
  MailOutline,
  MoreHoriz,
  NotificationsNone,
  PermIdentity,
  Search,
  Twitter,
} from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import SidebarOption from './SidebarOption';
import { useStateValue } from '../StateProvider';
import '../css/Sidebar.css';

const Sidebar = () => {
  const [{ user }] = useStateValue();

  return (
    <div className='sidebar'>
      <Twitter className='sidebar__twitterIcon' />
      <SidebarOption active Icon={Home} title='Home' />
      <SidebarOption Icon={Search} title='Explore' />
      <SidebarOption Icon={NotificationsNone} title='Notifications' />
      <SidebarOption Icon={MailOutline} title='Messages' />
      <SidebarOption Icon={BookmarkBorder} title='Bookmarks' />
      <SidebarOption Icon={ListAlt} title='Lists' />
      <SidebarOption Icon={PermIdentity} title='Profile' />
      <SidebarOption Icon={MoreHoriz} title='More' />
      <Button className='sidebar__tweet' fullWidth variant='outlined'>
        Tweet
      </Button>
      <div className='sidebar__footer'>
        <Avatar src={user?.photoURL} alt={user?.displayName} />
        <div className='sidebar__user'>
          <h3>{user?.displayName}</h3>
          <h5>{`@${user?.displayName}`}</h5>
        </div>
        <MoreHoriz />
      </div>
    </div>
  );
};

export default Sidebar;

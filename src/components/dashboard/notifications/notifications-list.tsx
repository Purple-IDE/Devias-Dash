import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { X as XIcon } from '@phosphor-icons/react/dist/ssr/X';
import { Bell as BellIcon } from '@phosphor-icons/react/dist/ssr/Bell';

const notifications = [
  {
    id: 1,
    title: 'New Order Received',
    description: 'You have received a new order #1234',
    time: '5 minutes ago',
  },
  {
    id: 2,
    title: 'Server Update',
    description: 'Server maintenance scheduled for tonight',
    time: '1 hour ago',
  },
  {
    id: 3,
    title: 'New User Registration',
    description: 'A new user has registered',
    time: '2 hours ago',
  },
];

export function NotificationsList(): React.JSX.Element {
  const [items, setItems] = React.useState(notifications);

  const handleDismiss = (id: number): void => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <List>
      {items.map((notification) => (
        <ListItem key={notification.id}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <BellIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary={notification.title}
            secondary={`${notification.description} • ${notification.time}`}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={() => { handleDismiss(notification.id); }} />

              <XIcon />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
} 
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { UserCircle as UserCircleIcon } from '@phosphor-icons/react/dist/ssr/UserCircle';
import { ShoppingCart as ShoppingCartIcon } from '@phosphor-icons/react/dist/ssr/ShoppingCart';
import { Gear as GearIcon } from '@phosphor-icons/react/dist/ssr/Gear';

const activities = [
  {
    id: 1,
    user: 'John Doe',
    action: 'updated their profile',
    time: '5 minutes ago',
    icon: UserCircleIcon,
  },
  {
    id: 2,
    user: 'Alice Smith',
    action: 'placed a new order',
    time: '2 hours ago',
    icon: ShoppingCartIcon,
  },
  {
    id: 3,
    user: 'Bob Johnson',
    action: 'changed their settings',
    time: '1 day ago',
    icon: GearIcon,
  },
  {
    id: 3,
    user: 'Bob Johnson',
    action: 'changed their settings',
    time: '1 day ago',
    icon: GearIcon,
  },
  {
    id: 3,
    user: 'Bob Johnson',
    action: 'changed their settings',
    time: '1 day ago',
    icon: GearIcon,
  },
  {
    id: 3,
    user: 'Bob Johnson',
    action: 'changed their settings',
    time: '1 day ago',
    icon: GearIcon,
  },
];

export function ActivityLog(): React.JSX.Element {
  return (
    <Card>
      <CardHeader title="Recent Activity" />
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <activity.icon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText 
              primary={activity.user}
              secondary={`${activity.action} • ${activity.time}`}
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
} 
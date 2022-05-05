import {
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import * as React from 'react';

type Props = {
  icon: React.ReactChild,
  primary: string,
  href: string,
};

const ListItemLink: React.FC<Props> = ({ icon, primary, href }) => (
  <ListItem disablePadding>
    <ListItemButton component="a" href={ href }>
      { icon }
      <ListItemText primary={ primary } />
    </ListItemButton>
  </ListItem>
);

export default ListItemLink;

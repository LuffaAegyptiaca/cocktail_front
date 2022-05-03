import Link from 'next/link';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import * as React from 'react';

type Props = {
  icon: any,
  primary: string,
  href: string,
};

export default function ListItemLink({ icon, primary, href }: Props): JSX.Element {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={ href }>
        { icon }
        <ListItemText primary={ primary } />
      </ListItemButton>
    </ListItem>
  );
}
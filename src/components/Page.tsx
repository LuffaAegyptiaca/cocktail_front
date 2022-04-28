import {
  AppBar,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { IconType } from '../types/utils';
import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/List';
import ListItemLink from './ListItemLink';
import * as React from 'react';

type MenuItem = { text: string, href: string, icon: IconType };

const menu: MenuItem[] = [
  { text: 'カクテル一覧', href: '/cocktails', icon: ListIcon },
];

function MenuBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <IconButton
            aria-label="menu"
            color="inherit"
            edge="start"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Cocktail
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        open={drawerOpen}
      >
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
        <Divider />
        <List>
          { menu.map(({ text, href, icon }) => (
            <ListItemLink key={ text } icon={ icon } href={ href } primary={ text } />
          )) }
        </List>
      </Drawer>
    </>
  );
}

export default function Page({ children }: { children: React.ReactChild }) {
  return (
    <>
      <MenuBar />
      <Container maxWidth="md">
        { children }
      </Container>
    </>
  );
}

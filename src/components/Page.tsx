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
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';

type MenuItem = { text: string, href: string };

const menu: MenuItem[] = [
  { text: 'カクテル一覧', href: '/cocktails' },
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
          { menu.map(({ text, /*href*/ }) => (
            <ListItem button dense key={ text }>
              {/* TODO: Put icon */}
              <ListItemText primary={ text } />
            </ListItem>
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

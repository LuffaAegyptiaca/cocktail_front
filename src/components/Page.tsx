import {
  AppBar,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  Close as CloseIcon,
  Menu as MenuIcon,
  List as ListIcon,
} from '@mui/icons-material';
import ListItemLink from './ListItemLink';
import * as React from 'react';

type MenuItem = { text: string, href: string, icon: any /* TODO: precise type */ };

const menu: MenuItem[] = [
  { text: 'カクテル一覧', href: '/cocktails', icon: (<ListIcon />) },
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
        <IconButton onClick={handleDrawerClose} size="small">
          <CloseIcon /> Close
        </IconButton>
        <Divider />
        <List disablePadding>
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

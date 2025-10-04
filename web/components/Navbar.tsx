'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BuildIcon from '@mui/icons-material/Build';
import Link from 'next/link';

/**
 * Navbar - Barre de navigation sticky avec logo et liens d'ancrage
 * Responsive avec menu hamburger sur mobile
 */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Effet de scroll pour rendre la navbar plus visible
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Navigation vers les sections avec smooth scroll
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  // Menu items
  const menuItems = [
    { label: 'Services', id: 'services', type: 'scroll' },
    { label: 'Avantages', id: 'avantages', type: 'scroll' },
    { label: 'Fonctionnement', id: 'fonctionnement', type: 'scroll' },
    { label: 'FAQs', href: '/faqs', type: 'link' },
    { label: 'Contact', href: '/contact', type: 'link' },
  ];

  // Drawer pour mobile
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 700, color: 'primary.main' }}>
        Econstructiv
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            {item.type === 'link' ? (
              <ListItemButton
                component={Link}
                href={item.href || '/'}
                sx={{ textAlign: 'center' }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ) : (
              <ListItemButton
                sx={{ textAlign: 'center' }}
                onClick={() => scrollToSection(item.id || '')}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={trigger ? 4 : 1}
        sx={{
          backgroundColor: trigger ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          boxShadow: trigger ? '0 4px 20px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.05)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo */}
            <BuildIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'primary.main' }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
                fontSize: '1.5rem',
              }}
            >
              Econstructiv
            </Typography>

            {/* Mobile menu icon */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleDrawerToggle}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Mobile logo */}
            <BuildIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'primary.main' }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
              }}
            >
              Econstructiv
            </Typography>

            {/* Desktop menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 1 }}>
              {menuItems.map((item) => (
                item.type === 'link' ? (
                  <Button
                    key={item.label}
                    component={Link}
                    href={item.href || '/'}
                    sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <Button
                    key={item.label}
                    onClick={() => scrollToSection(item.id || '')}
                    sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}
                  >
                    {item.label}
                  </Button>
                )
              ))}
            </Box>

            {/* CTA Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={() => scrollToSection('download')}
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              Télécharger l'app
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;

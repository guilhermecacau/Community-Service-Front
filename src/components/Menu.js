import React from "react";
import { Link, redirect, useNavigate } from "react-router-dom";

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
export default function Menu() {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Comunidade
            </Typography>
            <Button color="inherit" onClick={() => navigate("/")}>Página Inicial</Button>
            <Button color="inherit" onClick={() => navigate("/empresas")}>Empresas</Button>
            <Button color="inherit" onClick={() => navigate("/about_us")}>Quem somos?</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Grow,
  Grid
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EmpresaCard from "../components/EmpresaCard";

export default function Home() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChecked(true);
    }, 100);
  }, []);

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "url('https://clickpetroleoegas.com.br/wp-content/uploads/2022/09/Vagas-para-ajudante-de-pedreiro.jpg')",
        backgroundSize: "cover",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Grow
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            <Card sx={{ boxShadow: 3, maxWidth: 345, margin: "auto" }}>
              <CardContent>
                <Box sx={{ width: "100%" }}>
                  <Typography gutterBottom variant="h4" component="div">
                    Service Community
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Somos uma comunidade formada por aqueles serviços básicos de
                    cristãos, ou seja, você pode procurar irmãos de sua igreja
                    cadastrados aqui para contatar o seu serviço!
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => navigate("/empresas")}>
                  Empresas
                </Button>
                <Button size="small" onClick={() => navigate("/about_us")}>
                  Saiba Mais
                </Button>
              </CardActions>
            </Card>
          </Grow>
        </Grid>

        <EmpresaCard xs={12} sm={6} md={4} timeout={1700} background="gray" checked={checked}>Domésticos</EmpresaCard>
        <EmpresaCard xs={12} sm={6} md={4} timeout={1700} background="red" checked={checked}>Automotivo</EmpresaCard>
        <EmpresaCard xs={12} sm={6} md={4} timeout={1700} background="green" checked={checked}>Encanamento</EmpresaCard>
        <EmpresaCard xs={12} sm={6} md={4} timeout={1700} background="purple" checked={checked}>Beleza</EmpresaCard>
        <EmpresaCard xs={12} sm={6} md={4} timeout={1700} background="yellow" checked={checked}>a</EmpresaCard>
      </Grid>
    </Box>
  );
}

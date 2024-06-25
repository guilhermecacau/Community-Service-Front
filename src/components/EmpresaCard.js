import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Grow,
  Grid,
} from "@mui/material";

export default function EmpresaCard({ xs = 12, sm = 6, md = 4, timeout = 1000, background = "black", children = "a", checked = true }) {
  return (
    <Grid item xs={xs} sm={sm} md={md}>
      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: timeout } : {})}
      >
        <Card
          sx={{
            boxShadow: 3,
            maxWidth: 345,
            margin: "auto",
            backgroundColor: background,
          }}
        >
          <CardContent>
            <Box sx={{ width: "100%" }}>
              <Typography gutterBottom variant="h4" component="div">
                {children}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grow>
    </Grid>
  );
}

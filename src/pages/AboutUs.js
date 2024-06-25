import React, {useState, useEffect} from "react";
import { Box, FormControl, FormLabel, Skeleton, Stack, Switch, Typography} from '@mui/joy';


export default function AboutUs() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   setTimeout(() => {
    setLoading(false);
   }, 3000);
  }, []); 
  return (
    <Stack spacing={2} useFlexGap sx={{ maxWidth: '60ch' }}>
      <br/>
      <Box sx={{ m: 'auto' }}>
        <Typography
          sx={{ position: 'relative', overflow: 'hidden' }}
          level="h1"
          fontSize="xxl"
        >
          <Skeleton loading={loading}>Sobre o sistema</Skeleton>
        </Typography>
        <Typography
          level="body-xs"
          sx={{ mt: 1, mb: 2, position: 'relative', overflow: 'hidden' }}
          fontSize="xl"
        >
          <Skeleton loading={loading}>HISTORY, PURPOSE AND USAGE</Skeleton>
        </Typography>
        <Typography sx={{ position: 'relative', overflow: 'hidden' }}>
          <Skeleton loading={loading}>
           1.0 O nosso sistema Serviço da Comunidade é uma iniciativa sem fins lucrativos para reunir aqueles
           que querem prestar um serviço 
          </Skeleton>
        </Typography>
      </Box>
    </Stack>
  );
}

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';
import { getDictionary } from 'get-dictionary';

export default async function About() {
  const dictionary = await getDictionary();
  
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI - Next.js example in TypeScriptt
        </Typography>
        <Box sx={{ maxWidth: 'sm' }}>
          <Button variant="contained" component={NextLink} href="/">
            Go to the home page
          </Button>
        </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

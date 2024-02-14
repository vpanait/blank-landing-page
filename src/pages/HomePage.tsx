"use client"
import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import SectionContainer from '@/components/SectionContainer';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button, Card, Divider, Grid, Stack, useTheme
} from '@mui/material';
import t from '@/dictionaries/en.json';
import { APP_SIGN_UP_URL, ROUTE } from '@/utils/constants';
import ExpandMore from "@mui/icons-material/ExpandMore";
import ThemeModeWrapper from '@/theme/ThemeModeWrapper';


export default function HomePage() {
  const theme = useTheme();

  return (
    <>
      <SectionContainer withoutAnimation sx={{
        minHeight: '100vh',
        alignItems: 'center'
      }}
        disablePaddingY
        mode='dark'
      >
        <Grid item container sx={{ minHeight: '100vh', justifyContent: 'space-between', flexDirection: 'column', paddingY: 4 }}>
          <Grid item container xs={12}
            sx={{ minHeight: 50, alignItems: 'center', gap: 3 }}
          >
            <Box
              component="img"
              sx={{ maxWidth: { xs: 1 } }}
              src="/img/munnin.png"
            />
            <Typography variant="h3">
              Munnin
            </Typography>
          </Grid>

          <Grid item container md={12} sm={12}
            sx={{ flexDirection: 'column', justifyContent: 'center', gap: 3 }}
          >
            <Typography variant="h1">
              Munnin is an AI copilot<br />
              that assists financial advisors<br />
              in client meetings
            </Typography>
            <Typography variant="subtitle1">
              It transcribes conversations in real-time and generates actionable guidance
            </Typography>

            <Grid container sx={{ gap: 3 }}>
              <Button
                variant='contained'
                href={APP_SIGN_UP_URL}
                target="_blank"
              >
                Join the waitlist
              </Button>
              <Button
                variant='outlined'
                href={APP_SIGN_UP_URL}
                target="_blank"
              >
                Get access
              </Button>
            </Grid>
          </Grid>

          <Grid container sx={{ minHeight: 50 }}>
          </Grid>
        </Grid>
      </SectionContainer>
    </>
  );
}

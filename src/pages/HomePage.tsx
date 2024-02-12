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
      <SectionContainer withoutAnimation sx={{ backgroundColor: 'transparent', height: 'calc(100vh - 120px)', alignItems: 'center' }} disablePaddingY mode='dark'>
        <Grid container sx={{ justifyContent: 'space-between', rowGap: 2, position: 'relative' }}>
          <Grid item container md={12} sm={12}
            sx={{ flexDirection: 'column', justifyContent: 'center', gap: 3, position: "relative", backgroundColor: '#635f5f70', paddingY: 3,paddingX: 2 }}
          >
            <Typography variant="h1">
              Some text here <span style={{ color: theme.palette.info.main }}>and some with color</span>
            </Typography>
            <Typography variant="subtitle1">
              Subtitle comes here
            </Typography>
            <Button variant='contained' href={APP_SIGN_UP_URL} target="_blank">{t.homePage.hero.button}</Button>
          </Grid>

          {/* <Grid item container md={5} sm={12} sx={{ flexDirection: 'column', justifyContent: 'center' }}>
          </Grid> */}
        </Grid>
      </SectionContainer>
    </>
  );
}

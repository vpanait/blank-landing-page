import "./globals.css";
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '@/theme/theme';
import Navbar from '../components/Navbar';
import t from '@/dictionaries/en.json';
import { ROUTE } from "@/utils/constants"
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Muninn',
  openGraph: {
    title: 'Muninn',
    description: 'Munnin is an AI copilot that assists financial advisors in client meetings',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            {/* <Navbar mode="dark" /> */}
            {props.children}
            {/* <Footer mode={'dark'} /> */}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

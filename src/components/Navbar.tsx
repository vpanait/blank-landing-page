"use client"
import React, { Fragment, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  AppBar,
  Toolbar,
  Button,
  ListItemButton,
  Container,
  PaletteMode,
  createTheme,
  ButtonBase,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';
import SectionContainer from "@/components/SectionContainer";
import { animated, useScroll, useSpring } from "@react-spring/web";
import Image from 'next/image';
import t from '@/dictionaries/en.json';
import { APP_SIGN_IN_URL, APP_SIGN_UP_URL } from "@/utils/constants";
import { usePathname } from 'next/navigation'
import { getThemeOptions } from "@/theme/theme";
import useWindowPosition from "@/hooks/useWindowPosition";
import ThemeModeWrapper from "@/theme/ThemeModeWrapper";

interface MenuItem {
  label: string;
  path: string;
  subItems?: MenuItem[];
}

interface IProps {
  mode?: PaletteMode;
}

const Navbar = ({ mode = 'light' }: IProps) => {
  const pathname = usePathname();
  const theme = useMemo(() => createTheme(getThemeOptions(mode)), [mode]);

  const windowPosition = useWindowPosition();
  const { padding } = useSpring({
    padding: windowPosition > 0 ? 20 : 20,
  });

  const logo = (
    <Image
      src="/img/logo.png"
      alt=""
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '80px', height: 'auto' }}
    />
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = React.useState<number | null>(null);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar position="sticky">
      <SectionContainer
        mode={mode}
        withoutAnimation
        disablePaddingY
      >
        <animated.div style={{ paddingBlock: padding }}>
          <Toolbar variant="dense" sx={{ padding: { xs: 0 } }}>
            <Container sx={{
              display: { xs: "none", md: "flex" },
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: { xs: 0 }
            }}>
              {logo}

              <Button variant="contained">Action Button</Button>
            </Container>
          </Toolbar>
        </animated.div>
      </SectionContainer>
    </AppBar>
  );
}

export default Navbar;
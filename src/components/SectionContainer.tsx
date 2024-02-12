"use client"
import { Grid, PaletteMode, SxProps, Theme, ThemeOptions, createTheme } from "@mui/material";
import ThemeModeWrapper from "@/theme/ThemeModeWrapper";
import { RefObject, useEffect, useMemo } from "react";
import { getThemeOptions } from "@/theme/theme";
import { animated, useInView, useSpring } from "@react-spring/web";
import { CONTENT_WRAPPER_HIDDEN_ANIMATION, CONTENT_WRAPPER_PADDING_Y, CONTENT_WRAPPER_VISIBLE_ANIMATION } from "@/utils/constants";



interface IProps {
  children: React.ReactNode;
  mode?: PaletteMode;
  sx?: SxProps<Theme>;
  sectionRef?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined,
  withoutAnimation?: boolean
  disablePaddingY?: boolean
}

const SectionContainer = ({
  children,
  mode = 'light',
  sx,
  sectionRef,
  withoutAnimation = false,
  disablePaddingY = false
}: IProps) => {
  const theme = useMemo(() => createTheme(getThemeOptions(mode) as ThemeOptions), [mode]);

  const [ref, inView] = useInView({ amount: 0.2 });
  const [animatedStyles, api] = useSpring(() => ({
    from: withoutAnimation ? CONTENT_WRAPPER_VISIBLE_ANIMATION : CONTENT_WRAPPER_HIDDEN_ANIMATION,
  }));

  useEffect(() => {
    if (!withoutAnimation && inView) {
      api.start({
        to: CONTENT_WRAPPER_VISIBLE_ANIMATION,
        config: {
          mass: 1,
          tension: 280,
          friction: 60,
        },
      });
    }
  }, [withoutAnimation, inView, api]);

  return (
    <ThemeModeWrapper mode={mode} >
      <Grid
        container
        ref={sectionRef}
        sx={{
          backgroundColor: theme.palette.background.default,
          paddingY: (disablePaddingY ? 0 : `${CONTENT_WRAPPER_PADDING_Y}px`),
          position: 'relative',
          ...sx
        }}
      >
        <video
          // src={"/video/video.mp4"}
          src={require("../../public/video/waves.mp4")}
          autoPlay
          muted
          loop
          style={{
            "position": "absolute",
            "zIndex": "-1",
            "height": "100%",
            "width": "100%",
            objectFit: "cover"
          }}
        />
        <Grid item lg={1.5} md={0.5} sm={0.5} xs={0.25} />
        <Grid item lg={9} md={11} sm={11} xs={11.5} >
          <animated.div ref={ref} style={animatedStyles}>
            {children}
          </animated.div>
        </Grid>
        <Grid item lg={1.5} md={0.5} sm={0.5} xs={0.25} />
      </Grid>
    </ThemeModeWrapper >
  );
};

export default SectionContainer;
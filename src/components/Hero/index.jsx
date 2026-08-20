import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import HeroeSlider from "../HeroeSlider";
import LogoPic from "../../assets/logo/logo1.png";

export default function Hero({ onMenuClick }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",

        display: "flex",
        alignItems: "center",

        background: "#111",

        py: {
          xs: 6,
          md: 4,
        },

        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{
            xs: 5,
            md: 8,
          }}
          alignItems="center"
        >
          {/* =====================================================
              ЛІВА ЧАСТИНА
          ====================================================== */}

          <Grid
            size={{
              xs: 12,
              md: 5,
            }}
          >
            <Box
              sx={{
                position: "relative",

                minHeight: {
                  xs: 500,
                  md: 600,
                },

                width: "100%",

                overflow: "hidden",
              }}
            >
              {/* =================================================
                  НИЖНІЙ РІВЕНЬ — ЛОГОТИП
              ================================================== */}

              <Box
                component="img"
                src={LogoPic}
                alt="Антураж"
                sx={{
                  position: "absolute",

                  top: {
                    xs: 20,
                    md: 0,
                  },

                  left: {
                    xs: "0",
                    md: "0%",
                  },

                  width: {
                    xs: "100%",
                    md: "100%",
                  },

                  maxWidth: "none",

                  height: "auto",

                  objectFit: "contain",

                  opacity: 1,

                  pointerEvents: "none",

                  userSelect: "none",

                  zIndex: 1,

                  transform: "rotate(345deg)",

                  transformOrigin:
                    "center center",
                }}
              />

              {/* =================================================
                  ВЕРХНІЙ РІВЕНЬ — CONTENT
              ================================================== */}

              <Box
                sx={{
                  position: "relative",

                  zIndex: 2,

                  width: "100%",

                  px: {
                    xs: "16px",
                    md: "32px",
                  },

                  pt: {
                    xs: "240px",
                    sm: "370px",
                    md: "270px",
                  },

                  pb: 0,

                  display: "flex",

                  flexDirection: "column",

                  alignItems: "flex-start",

                  textAlign: "left",

                  boxSizing: "border-box",
                }}
              >
                {/* =================================================
                    КАТЕГОРІЇ
                ================================================== */}

                <Typography
                  sx={{
                    width: "100%",

                    color: "#d4af37",

                    fontSize: {
                      xs: 13,
                      md: 15,
                    },

                    fontWeight: 700,

                    letterSpacing: {
                      xs: 3,
                      md: 5,
                    },

                    textTransform: "uppercase",

                    textAlign: "left",

                    mb: 2,
                  }}
                >
                  Coffee • Bar • Lounge
                </Typography>

                {/* =================================================
                    ОПИС
                ================================================== */}

                <Typography
                  sx={{
                    width: "100%",

                    maxWidth: "none",

                    color:
                      "rgba(255,255,255,.82)",

                    fontSize: {
                      xs: 17,
                      md: 20,
                    },

                    lineHeight: 1.7,

                    textAlign: "left",

                    textShadow:
                      "0 2px 12px rgba(0,0,0,.8)",
                  }}
                >
                  Найкраща кава, авторські коктейлі,
                  добірний алкоголь, кальяни та
                  затишна атмосфера для гарного
                  відпочинку.
                </Typography>

                {/* =================================================
                    КНОПКА
                ================================================== */}

                <Button
                  variant="contained"
                  size="large"
                  onClick={onMenuClick}
                  sx={{
                    mt: 3,

                    px: 5,

                    py: 1.7,

                    borderRadius: "40px",

                    background: "#d4af37",

                    color: "#111",

                    fontWeight: 700,

                    fontSize: 16,

                    boxShadow: "none",

                    transition:
                      "all .25s ease",

                    "&:hover": {
                      background: "#c39d2c",

                      transform:
                        "translateY(-3px)",

                      boxShadow:
                        "0 12px 30px rgba(212,175,55,.25)",
                    },
                  }}
                >
                  Переглянути меню
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* =====================================================
              ПРАВА ЧАСТИНА
          ====================================================== */}

          <Grid
            size={{
              xs: 12,
              md: 7,
            }}
          >
            <Box
              sx={{
                height: {
                  xs: 350,
                  sm: 450,
                  md: 600,
                },

                borderRadius: 6,

                overflow: "hidden",

                background:
                  "rgba(255,255,255,.04)",

                border:
                  "1px solid rgba(255,255,255,.08)",

                backdropFilter:
                  "blur(20px)",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",
              }}
            >
              <HeroeSlider />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
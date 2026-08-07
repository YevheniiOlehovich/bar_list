import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import HeroeSlider from "../HeroeSlider";

export default function Hero({ onMenuClick }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(180deg, #0f0f0f 0%, #181818 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={8}
          alignItems="center"
        >
          {/* Ліва частина */}

          <Grid
            size={{
              xs: 12,
              md: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Box
                component="img"
                src="/logo.png"
                alt="Logo"
                sx={{
                  width: 140,
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  lineHeight: 1,
                  fontSize: {
                    xs: "3rem",
                    md: "5rem",
                  },
                }}
              >
                Coffee Bar
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,.75)",
                  fontSize: {
                    xs: 18,
                    md: 22,
                  },
                  lineHeight: 1.8,
                  maxWidth: 500,
                }}
              >
                Найкраща кава, авторські напої,
                затишна атмосфера та приємний
                відпочинок для кожного гостя.
              </Typography>

              <Button
                variant="contained"
                size="large"
                onClick={onMenuClick}
                sx={{
                  alignSelf: "flex-start",

                  mt: 2,

                  px: 5,
                  py: 1.7,

                  borderRadius: "40px",

                  background: "#d4af37",

                  color: "#111",

                  fontWeight: 700,

                  fontSize: 17,

                  boxShadow: "none",

                  transition: ".25s",

                  "&:hover": {
                    background: "#c39d2c",
                    transform: "translateY(-3px)",
                    boxShadow:
                      "0 12px 30px rgba(212,175,55,.25)",
                  },
                }}
              >
                Переглянути меню
              </Button>
            </Box>
          </Grid>

          {/* Права частина */}

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
                  md: 600,
                },

                borderRadius: 6,

                overflow: "hidden",

                background:
                  "rgba(255,255,255,.04)",

                border:
                  "1px solid rgba(255,255,255,.08)",

                backdropFilter: "blur(20px)",

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
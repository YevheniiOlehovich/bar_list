import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import WifiIcon from "@mui/icons-material/Wifi";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const cards = [
  {
    icon: LocationOnIcon,
    title: "Адреса",
    text: (
      <>
        вул. Центральна, 15
        <br />
        Прилуки, Чернігівська область
      </>
    ),
  },
  {
    icon: PhoneIcon,
    title: "Телефони",
    text: (
      <>
        +380 (67) 123-45-67
        <br />
        +380 (50) 987-65-43
      </>
    ),
  },
  {
    icon: WifiIcon,
    title: "Wi-Fi",
    text: (
      <>
        Назва: CoffeeGuest
        <br />
        Пароль: 12345678
      </>
    ),
  },
  {
    icon: AccessTimeIcon,
    title: "Години роботи",
    text: (
      <>
        Пн – Нд
        <br />
        08:00 – 22:00
      </>
    ),
  },
];

export default function InfoBlock() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 4,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{
          mb: 4,
          color: "#d4af37",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Контактна інформація
      </Typography>

      <Grid container spacing={3}>
        {cards.map((item) => {
          const Icon = item.icon;

          return (
            <Grid
              key={item.title}
              size={{
                xs: 12,
                sm: 6,
                md: 3,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  p: 4,
                  borderRadius: 4,
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(20px)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  transition: "all .25s ease",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "#d4af37",
                    boxShadow:
                      "0 12px 30px rgba(212,175,55,.18)",

                    "& .info-icon": {
                      color: "#d4af37",
                    },

                    "& .info-title": {
                      color: "#d4af37",
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: 2,
                  }}
                >
                  <Icon
                    className="info-icon"
                    sx={{
                      fontSize: 42,
                      color: "#fff",
                      transition: ".25s",
                    }}
                  />

                  <Typography
                    className="info-title"
                    sx={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: 20,
                      transition: ".25s",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,.8)",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
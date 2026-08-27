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
                py: { xs: 5, md: 7 },
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    mb: { xs: 3, md: 4 },
                    color: "#d4af37",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontSize: {
                        xs: "1.7rem",
                        sm: "2rem",
                        md: "2.2rem",
                    },
                }}
            >
                Контактна інформація
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }}>
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
                                    p: {
                                        xs: 3,
                                        md: 3.5,
                                    },

                                    borderRadius: 4,

                                    background:
                                        "rgba(255,255,255,0.035)",

                                    backdropFilter:
                                        "blur(20px)",

                                    WebkitBackdropFilter:
                                        "blur(20px)",

                                    border:
                                        "1px solid rgba(255,255,255,0.08)",

                                    transition:
                                        "border-color .25s ease, box-shadow .25s ease, background .25s ease",

                                    "&:hover": {
                                        background:
                                            "rgba(255,255,255,0.055)",

                                        borderColor:
                                            "rgba(212,175,55,0.65)",

                                        boxShadow:
                                            "0 0 25px rgba(212,175,55,0.12)",

                                        "& .info-icon": {
                                            color: "#d4af37",
                                            filter:
                                                "drop-shadow(0 0 8px rgba(212,175,55,0.35))",
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
                                        flexDirection:
                                            "column",
                                        alignItems:
                                            "center",
                                        textAlign:
                                            "center",
                                        gap: 1.5,
                                    }}
                                >
                                    <Icon
                                        className="info-icon"
                                        sx={{
                                            fontSize: {
                                                xs: 36,
                                                md: 40,
                                            },

                                            color: "#fff",

                                            transition:
                                                "color .25s ease, filter .25s ease",
                                        }}
                                    />

                                    <Typography
                                        className="info-title"
                                        sx={{
                                            color: "#fff",
                                            fontWeight: 700,
                                            fontSize: {
                                                xs: 18,
                                                md: 20,
                                            },
                                            transition:
                                                "color .25s ease",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color:
                                                "rgba(255,255,255,.72)",
                                            lineHeight: 1.7,
                                            fontSize: {
                                                xs: 14,
                                                md: 15,
                                            },
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
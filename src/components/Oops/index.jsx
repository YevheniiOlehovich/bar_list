import {
    Container,
    Paper,
    Typography,
    Box,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Oops() {
    return (
        <Container
            maxWidth="xl"
            sx={{
                py: { xs: 5, md: 7 },
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    maxWidth: 600,
                    mx: "auto",
                    p: { xs: 4, md: 5 },

                    borderRadius: 4,

                    background:
                        "rgba(255,255,255,0.035)",

                    backdropFilter:
                        "blur(20px)",

                    WebkitBackdropFilter:
                        "blur(20px)",

                    border:
                        "1px solid rgba(255,255,255,0.08)",

                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <LockOutlinedIcon
                        sx={{
                            fontSize: { xs: 48, md: 56 },
                            color: "#d4af37",
                            filter:
                                "drop-shadow(0 0 10px rgba(212,175,55,0.25))",
                        }}
                    />

                    <Typography
                        sx={{
                            color: "#d4af37",
                            fontWeight: 700,
                            fontSize: {
                                xs: "1.7rem",
                                md: "2rem",
                            },
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                        }}
                    >
                        Упс...
                    </Typography>

                    <Typography
                        sx={{
                            color: "rgba(255,255,255,.72)",
                            lineHeight: 1.7,
                            fontSize: {
                                xs: 14,
                                md: 15,
                            },
                        }}
                    >
                        Доступ до меню зараз недоступний.
                        <br />
                        Будь ласка, скористайтеся QR-кодом
                        для входу.
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}
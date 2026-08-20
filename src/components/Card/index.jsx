import { useState } from "react";

import {
    Card as MuiCard,
    Box,
    Typography,
    Chip,
} from "@mui/material";

import TestImage from "../../assets/test_image.jpeg";

import {
    categoryLabels,
    categoryColors,
} from "../../helpers/categories";

import DrinkModal from "../DrinkModal";

export default function DrinkCard({ drink }) {
    const [isModalOpen, setIsModalOpen] =
        useState(false);

    // ==========================================
    // IMAGE URL
    // ==========================================

    const getImageUrl = (path) => {
        if (!path) {
            return null;
        }

        if (path.startsWith("http")) {
            return path;
        }

        return `${import.meta.env.BASE_URL}${path.replace(
            /^\//,
            ""
        )}`;
    };

    const primaryImage =
        getImageUrl(drink?.img_primary) ||
        drink?.image ||
        TestImage;

    // ==========================================
    // MODAL
    // ==========================================

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {/* ==================================
                DRINK CARD
            ================================== */}

            <MuiCard
                elevation={0}
                sx={{
                    width: "100%",

                    minHeight: {
                        xs: 190,
                        sm: 220,
                        md: 240,
                        lg: 250,
                    },

                    display: "flex",

                    position: "relative",

                    overflow: "hidden",

                    borderRadius: {
                        xs: 3,
                        sm: 3.5,
                        md: 4,
                    },

                    background:
                        "linear-gradient(135deg, #1a1a1a 0%, #141414 100%)",

                    border:
                        "1px solid rgba(255,255,255,0.08)",

                    color: "#fff",

                    transition:
                        "border-color .25s ease, box-shadow .25s ease, transform .25s ease",

                    "&:hover": {
                        borderColor:
                            "rgba(212,175,55,0.35)",

                        boxShadow:
                            "0 14px 40px rgba(0,0,0,0.28)",
                    },

                    /*
                     * На екранах від 1024px
                     * трохи більше простору.
                     */
                    "@media (min-width: 1024px)": {
                        minHeight: 250,
                    },
                }}
            >
                {/* ==================================
                    LEFT — INFORMATION
                ================================== */}

                <Box
                    sx={{
                        flex: 1,

                        minWidth: 0,

                        display: "flex",

                        flexDirection:
                            "column",

                        justifyContent:
                            "center",

                        p: {
                            xs: 2,
                            sm: 2.75,
                            md: 3.25,
                            lg: 3.5,
                        },

                        pr: {
                            xs: 1.25,
                            sm: 2,
                            md: 3,
                            lg: 3.5,
                        },
                    }}
                >
                    {/* ==================================
                        CATEGORY
                    ================================== */}

                    <Box
                        sx={{
                            mb: {
                                xs: 1,
                                sm: 1.25,
                                md: 1.5,
                            },
                        }}
                    >
                        <Chip
                            size="small"
                            label={
                                categoryLabels[
                                    drink?.type
                                ] ||
                                drink?.type
                            }
                            sx={{
                                height: {
                                    xs: 25,
                                    sm: 27,
                                    md: 29,
                                },

                                px: {
                                    xs: 0.3,
                                    md: 0.5,
                                },

                                background:
                                    categoryColors[
                                        drink?.type
                                    ] ||
                                    "#d4af37",

                                color: "#fff",

                                fontFamily:
                                    '"Montserrat", sans-serif',

                                fontSize: {
                                    xs: 9,
                                    sm: 10,
                                    md: 11,
                                },

                                fontWeight: 700,

                                textTransform:
                                    "uppercase",

                                letterSpacing:
                                    "0.6px",
                            }}
                        />
                    </Box>

                    {/* ==================================
                        NAME
                    ================================== */}

                    <Typography
                        sx={{
                            fontFamily:
                                '"Bebas Neue", sans-serif',

                            fontSize: {
                                xs: 26,
                                sm: 31,
                                md: 35,
                                lg: 39,
                            },

                            lineHeight: {
                                xs: 0.98,
                                sm: 1,
                                md: 1.02,
                            },

                            fontWeight: 400,

                            textTransform:
                                "uppercase",

                            letterSpacing: {
                                xs: "0.4px",
                                sm: "0.6px",
                                md: "0.8px",
                            },

                            color: "#fff",

                            mb: {
                                xs: 1,
                                sm: 1.25,
                                md: 1.5,
                            },

                            /*
                             * Щоб дуже довга назва
                             * не розвалила картку.
                             */
                            display:
                                "-webkit-box",

                            WebkitBoxOrient:
                                "vertical",

                            WebkitLineClamp: {
                                xs: 2,
                                sm: 2,
                                md: 2,
                            },

                            overflow: "hidden",

                            textOverflow:
                                "ellipsis",
                        }}
                    >
                        {drink?.name}
                    </Typography>

                    {/* ==================================
                        VOLUME
                    ================================== */}

                    {drink?.volume && (
                        <Box
                            sx={{
                                display: "flex",

                                alignItems:
                                    "center",

                                gap: {
                                    xs: 0.75,
                                    sm: 1,
                                },

                                mb: {
                                    xs: 1,
                                    sm: 1.25,
                                    md: 1.5,
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily:
                                        '"Montserrat", sans-serif',

                                    fontSize: {
                                        xs: 11,
                                        sm: 12,
                                        md: 13,
                                    },

                                    fontWeight: 500,

                                    color:
                                        "rgba(255,255,255,0.48)",
                                }}
                            >
                                Об'єм
                            </Typography>

                            <Typography
                                sx={{
                                    fontFamily:
                                        '"Montserrat", sans-serif',

                                    fontSize: {
                                        xs: 12,
                                        sm: 13,
                                        md: 14,
                                    },

                                    fontWeight: 700,

                                    color:
                                        "rgba(255,255,255,0.9)",
                                }}
                            >
                                {drink.volume}
                            </Typography>
                        </Box>
                    )}

                    {/* ==================================
                        DESCRIPTION
                    ================================== */}

                    {drink?.description && (
                        <Typography
                            sx={{
                                fontFamily:
                                    '"Montserrat", sans-serif',

                                maxWidth: 700,

                                fontSize: {
                                    xs: 11,
                                    sm: 12,
                                    md: 13,
                                    lg: 14,
                                },

                                lineHeight: {
                                    xs: 1.4,
                                    sm: 1.5,
                                    md: 1.55,
                                },

                                fontWeight: 400,

                                color:
                                    "rgba(255,255,255,0.58)",

                                display:
                                    "-webkit-box",

                                WebkitBoxOrient:
                                    "vertical",

                                WebkitLineClamp: {
                                    xs: 2,
                                    sm: 2,
                                    md: 2,
                                },

                                overflow: "hidden",

                                textOverflow:
                                    "ellipsis",

                                mb: {
                                    xs: 1.25,
                                    sm: 1.5,
                                    md: 1.75,
                                },
                            }}
                        >
                            {drink.description}
                        </Typography>
                    )}

                    {/* ==================================
                        PRICE
                    ================================== */}

                    <Typography
                        sx={{
                            fontFamily:
                                '"Montserrat", sans-serif',

                            fontSize: {
                                xs: 19,
                                sm: 22,
                                md: 25,
                                lg: 28,
                            },

                            lineHeight: 1,

                            fontWeight: 800,

                            color: "#d4af37",

                            letterSpacing: {
                                xs: "0.2px",
                                md: "0.4px",
                            },

                            textShadow:
                                "0 2px 12px rgba(212,175,55,0.15)",
                        }}
                    >
                        {drink?.price} ₴
                    </Typography>
                </Box>

                {/* ==================================
                    RIGHT — IMAGE
                ================================== */}

                <Box
                    sx={{
                        width: {
                            xs: 120,
                            sm: 165,
                            md: 200,
                            lg: 220,
                        },

                        flexShrink: 0,

                        display: "flex",

                        alignItems: "center",

                        justifyContent:
                            "center",

                        p: {
                            xs: 1.25,
                            sm: 1.75,
                            md: 2.25,
                            lg: 2.5,
                        },
                    }}
                >
                    <Box
                        onClick={
                            handleOpenModal
                        }
                        role="button"
                        tabIndex={0}
                        aria-label={`Відкрити ${drink?.name}`}
                        onKeyDown={(event) => {
                            if (
                                event.key ===
                                    "Enter" ||
                                event.key ===
                                    " "
                            ) {
                                event.preventDefault();

                                handleOpenModal();
                            }
                        }}
                        sx={{
                            width: "100%",

                            height: {
                                xs: 155,
                                sm: 180,
                                md: 205,
                                lg: 220,
                            },

                            borderRadius: {
                                xs: 2.5,
                                sm: 3,
                            },

                            overflow: "hidden",

                            cursor: "pointer",

                            background:
                                "#0d0d0d",

                            border:
                                "1px solid rgba(255,255,255,0.1)",

                            transition:
                                "transform .3s ease, border-color .3s ease, box-shadow .3s ease",

                            "&:hover": {
                                transform:
                                    "scale(1.03)",

                                borderColor:
                                    "rgba(212,175,55,0.65)",

                                boxShadow:
                                    "0 10px 30px rgba(0,0,0,0.45)",
                            },

                            "&:focus-visible": {
                                outline:
                                    "2px solid #d4af37",

                                outlineOffset: 2,
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src={primaryImage}
                            alt={
                                drink?.name ||
                                "Напій"
                            }
                            sx={{
                                width: "100%",

                                height: "100%",

                                objectFit: "cover",

                                display: "block",
                            }}
                        />
                    </Box>
                </Box>
            </MuiCard>

            {/* ==================================
                MODAL
            ================================== */}

            <DrinkModal
                drink={drink}
                open={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
}
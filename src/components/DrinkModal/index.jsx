import {
    Box,
    Chip,
    Dialog,
    IconButton,
    Typography,
    Slide,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import {
    categoryLabels,
    categoryColors,
} from "../../helpers/categories";

import { forwardRef } from "react";

// ==========================================
// SLIDE TRANSITION
// ==========================================

const SlideTransition = forwardRef(
    function SlideTransition(props, ref) {
        return (
            <Slide
                direction="up"
                ref={ref}
                {...props}
            />
        );
    }
);

export default function DrinkModal({
    drink,
    open,
    onClose,
}) {
    if (!drink) {
        return null;
    }

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

    const image =
        getImageUrl(drink?.img_secondary) ||
        drink?.image;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            slots={{
                transition: SlideTransition,
            }}
            fullWidth
            maxWidth={false}
            slotProps={{
                backdrop: {
                    sx: {
                        background:
                            "rgba(0, 0, 0, 0.78)",

                        backdropFilter:
                            "blur(5px)",

                        WebkitBackdropFilter:
                            "blur(5px)",
                    },
                },

                paper: {
                    sx: {
                        width: {
                            xs: "calc(100% - 24px)",
                            sm: "80vw",
                            md: "55vw",
                            lg: "50vw",
                        },

                        maxWidth: "900px",

                        height: {
                            xs: "80vh",
                            sm: "78vh",
                            md: "78vh",
                        },

                        maxHeight: "850px",

                        margin: "auto",

                        padding: 0,

                        position:
                            "relative",

                        overflow: "hidden",

                        borderRadius: {
                            xs: 3,
                            md: 4,
                        },

                        background:
                            "#0d0d0d",

                        color: "#fff",

                        border:
                            "1px solid rgba(255,255,255,0.1)",

                        boxShadow:
                            "0 30px 100px rgba(0,0,0,0.7)",
                    },
                },
            }}
        >
            {/* ==================================
                IMAGE
            ================================== */}

            {image && (
                <Box
                    component="img"
                    src={image}
                    alt={drink.name}
                    sx={{
                        position:
                            "absolute",

                        inset: 0,

                        width: "100%",

                        height: "100%",

                        objectFit: "cover",

                        display: "block",
                    }}
                />
            )}

            {/* ==================================
                DARK OVERLAY
            ================================== */}

            <Box
                sx={{
                    position:
                        "absolute",

                    inset: 0,

                    background:
                        "linear-gradient(180deg, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.92) 100%)",

                    pointerEvents:
                        "none",
                }}
            />

            {/* ==================================
                CLOSE BUTTON
            ================================== */}

            <IconButton
                onClick={onClose}
                aria-label="Закрити"
                sx={{
                    position:
                        "absolute",

                    top: {
                        xs: 12,
                        md: 18,
                    },

                    right: {
                        xs: 12,
                        md: 18,
                    },

                    zIndex: 5,

                    width: {
                        xs: 42,
                        md: 48,
                    },

                    height: {
                        xs: 42,
                        md: 48,
                    },

                    color: "#fff",

                    background:
                        "rgba(0,0,0,0.45)",

                    backdropFilter:
                        "blur(8px)",

                    border:
                        "1px solid rgba(255,255,255,0.15)",

                    "&:hover": {
                        background:
                            "rgba(0,0,0,0.75)",

                        color: "#d4af37",
                    },
                }}
            >
                <CloseIcon />
            </IconButton>

            {/* ==================================
                INFORMATION OVER IMAGE
            ================================== */}

            <Box
                sx={{
                    position:
                        "absolute",

                    left: 0,

                    right: 0,

                    bottom: 0,

                    zIndex: 4,

                    p: {
                        xs: 2.5,
                        sm: 3.5,
                        md: 4.5,
                    },

                    pt: {
                        xs: 8,
                        sm: 10,
                        md: 12,
                    },

                    color: "#fff",
                }}
            >
                {/* CATEGORY */}

                <Chip
                    size="small"
                    label={
                        categoryLabels[
                            drink.type
                        ] ||
                        drink.type
                    }
                    sx={{
                        mb: 1.5,

                        height: {
                            xs: 28,
                            md: 32,
                        },

                        background:
                            categoryColors[
                                drink.type
                            ] ||
                            "#d4af37",

                        color: "#fff",

                        fontSize: {
                            xs: 10,
                            md: 11,
                        },

                        fontWeight: 700,

                        textTransform:
                            "uppercase",

                        letterSpacing:
                            "0.6px",

                        backdropFilter:
                            "blur(8px)",
                    }}
                />

                {/* NAME */}

                <Typography
                    sx={{
                        fontSize: {
                            xs: 28,
                            sm: 34,
                            md: 44,
                        },

                        lineHeight: 1.05,

                        fontWeight: 800,

                        textTransform:
                            "uppercase",

                        letterSpacing:
                            "0.5px",

                        mb: 2,

                        textShadow:
                            "0 3px 15px rgba(0,0,0,0.6)",
                    }}
                >
                    {drink.name}
                </Typography>

                {/* INFO */}

                <Box
                    sx={{
                        display: "flex",

                        alignItems:
                            "center",

                        flexWrap: "wrap",

                        gap: {
                            xs: 2,
                            md: 3,
                        },

                        mb: 1.5,

                        pt: 1.5,

                        borderTop:
                            "1px solid rgba(255,255,255,0.2)",
                    }}
                >
                    {/* VOLUME */}

                    {drink.volume && (
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: 11,

                                    color:
                                        "rgba(255,255,255,0.6)",

                                    mb: 0.3,
                                }}
                            >
                                ОБ'ЄМ
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: 14,
                                        md: 16,
                                    },

                                    fontWeight: 700,
                                }}
                            >
                                {
                                    drink.volume
                                }
                            </Typography>
                        </Box>
                    )}

                    {/* PRICE */}

                    <Box>
                        <Typography
                            sx={{
                                fontSize: 11,

                                color:
                                    "rgba(255,255,255,0.6)",

                                mb: 0.3,
                            }}
                        >
                            ЦІНА
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: {
                                    xs: 20,
                                    md: 24,
                                },

                                lineHeight: 1,

                                fontWeight: 800,

                                color:
                                    "#d4af37",

                                textShadow:
                                    "0 2px 10px rgba(0,0,0,0.5)",
                            }}
                        >
                            {drink.price} ₴
                        </Typography>
                    </Box>
                </Box>

                {/* DESCRIPTION */}

                {drink.description && (
                    <Typography
                        sx={{
                            maxWidth: 700,

                            fontSize: {
                                xs: 13,
                                sm: 14,
                                md: 15,
                            },

                            lineHeight: 1.6,

                            color:
                                "rgba(255,255,255,0.8)",

                            display:
                                "-webkit-box",

                            WebkitLineClamp: {
                                xs: 3,
                                md: 4,
                            },

                            WebkitBoxOrient:
                                "vertical",

                            overflow: "hidden",

                            textShadow:
                                "0 2px 8px rgba(0,0,0,0.7)",
                        }}
                    >
                        {drink.description}
                    </Typography>
                )}
            </Box>
        </Dialog>
    );
}
import { useRef } from "react";

import {
    AppBar,
    Box,
    Button,
    Toolbar,
} from "@mui/material";

import drinks from "../../data/data.json";

import {
    categoryLabels,
    categoryOrder,
} from "../../helpers/categories";

import { useCategoryStore } from "../../store/useCategoryStore";

export default function Header({
    onCategoryChange,
}) {
    const menuRef = useRef(null);

    const activeCategory = useCategoryStore(
        (state) => state.activeCategory
    );

    const setActiveCategory = useCategoryStore(
        (state) => state.setActiveCategory
    );

    // ==========================================
    // КАТЕГОРІЇ, ЯКІ Є В DATA
    // ==========================================

    const existingTypes = new Set(
        drinks.map((drink) => drink.type)
    );

    const categories = categoryOrder.filter(
        (category) =>
            category === "all" ||
            existingTypes.has(category)
    );

    // ==========================================
    // ВИБІР КАТЕГОРІЇ
    // ==========================================

    const handleCategoryClick = (category) => {
        // Змінюємо активну категорію
        setActiveCategory(category);

        // Просимо MenuSection
        // прокрутити сторінку до Header
        requestAnimationFrame(() => {
            onCategoryChange?.();
        });

        // ======================================
        // ПРОКРУТКА КАТЕГОРІЇ
        // НА МОБІЛЬНОМУ
        // ======================================

        const container = menuRef.current;

        if (!container) {
            return;
        }

        const button =
            container.querySelector(
                `[data-category="${category}"]`
            );

        if (!button) {
            return;
        }

        const containerRect =
            container.getBoundingClientRect();

        const buttonRect =
            button.getBoundingClientRect();

        const offset =
            buttonRect.left -
            containerRect.left -
            containerRect.width / 2 +
            buttonRect.width / 2;

        container.scrollTo({
            left:
                container.scrollLeft + offset,
            behavior: "smooth",
        });
    };

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                top: 0,

                width: "100%",

                zIndex: 1100,

                background:
                    "rgba(15, 15, 15, 0.94)",

                backdropFilter:
                    "blur(18px)",

                WebkitBackdropFilter:
                    "blur(18px)",

                borderBottom:
                    "1px solid rgba(255, 255, 255, 0.08)",

                boxShadow:
                    "0 8px 30px rgba(0, 0, 0, 0.25)",
            }}
        >
            <Toolbar
                disableGutters
                sx={{
                    width: "100%",

                    minHeight: {
                        xs: 64,
                        md: 72,
                    },

                    px: {
                        xs: 0,
                        sm: 1,
                        md: 2,
                    },

                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* ==================================
                    КАТЕГОРІЇ
                ================================== */}

                <Box
                    ref={menuRef}
                    sx={{
                        width: "100%",

                        maxWidth: "1400px",

                        mx: "auto",

                        display: "flex",

                        alignItems: "center",

                        gap: {
                            xs: 1,
                            sm: 1.2,
                            md: 1.5,
                        },

                        /*
                         * Мобілка:
                         * горизонтальний свайп.
                         *
                         * Десктоп:
                         * всі категорії видно.
                         */
                        overflowX: {
                            xs: "auto",
                            md: "hidden",
                        },

                        overflowY: "hidden",

                        justifyContent: {
                            xs: "flex-start",
                            md: "center",
                        },

                        flexWrap: "nowrap",

                        scrollbarWidth: "none",

                        "&::-webkit-scrollbar": {
                            display: "none",
                        },

                        /*
                         * Горизонтальний
                         * touch-scroll
                         */
                        touchAction: "pan-x",

                        /*
                         * Забороняємо
                         * виділення тексту
                         */
                        userSelect: "none",

                        WebkitUserSelect:
                            "none",

                        px: {
                            xs: 1.5,
                            sm: 2,
                            md: 2,
                        },

                        py: {
                            xs: 1,
                            md: 1.2,
                        },
                    }}
                >
                    {categories.map((category) => {
                        const isActive =
                            activeCategory ===
                            category;

                        return (
                            <Button
                                key={category}
                                data-category={
                                    category
                                }
                                onClick={() =>
                                    handleCategoryClick(
                                        category
                                    )
                                }
                                sx={{
                                    flexShrink: 0,

                                    minWidth:
                                        "auto",

                                    whiteSpace:
                                        "nowrap",

                                    minHeight: {
                                        xs: 40,
                                        sm: 42,
                                        md: 44,
                                    },

                                    px: {
                                        xs: 2,
                                        sm: 2.4,
                                        md: 2.8,
                                    },

                                    py: {
                                        xs: 0.8,
                                        md: 1,
                                    },

                                    borderRadius:
                                        "28px",

                                    color:
                                        isActive
                                            ? "#d4af37"
                                            : "rgba(255,255,255,0.82)",

                                    background:
                                        isActive
                                            ? "rgba(212,175,55,0.16)"
                                            : "rgba(255,255,255,0.06)",

                                    border:
                                        isActive
                                            ? "1px solid rgba(212,175,55,0.55)"
                                            : "1px solid rgba(255,255,255,0.06)",

                                    fontSize: {
                                        xs: 14,
                                        sm: 14,
                                        md: 15,
                                    },

                                    fontWeight:
                                        isActive
                                            ? 700
                                            : 600,

                                    lineHeight: 1,

                                    textTransform:
                                        "none",

                                    letterSpacing:
                                        "0.2px",

                                    transition:
                                        "background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease",

                                    userSelect:
                                        "none",

                                    WebkitUserSelect:
                                        "none",

                                    "&:hover": {
                                        background:
                                            isActive
                                                ? "rgba(212,175,55,0.24)"
                                                : "rgba(255,255,255,0.11)",

                                        color:
                                            isActive
                                                ? "#d4af37"
                                                : "#fff",

                                        borderColor:
                                            isActive
                                                ? "rgba(212,175,55,0.7)"
                                                : "rgba(255,255,255,0.12)",
                                    },

                                    "&:active": {
                                        transform:
                                            "scale(0.97)",
                                    },
                                }}
                            >
                                {
                                    categoryLabels[
                                        category
                                    ]
                                }
                            </Button>
                        );
                    })}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
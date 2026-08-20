import {
    Container,
    Grid,
    Typography,
    Box,
} from "@mui/material";

import drinks from "../../data/data.json";
import Card from "../Card";

import { useCategoryStore } from "../../store/useCategoryStore";

import {
    categoryOrder,
    categoryLabels,
} from "../../helpers/categories";

export default function DrinksList() {
    const activeCategory = useCategoryStore(
        (state) => state.activeCategory
    );

    // ==========================================
    // РЕНДЕР КАРТОК
    // ==========================================

    const renderCards = (items) => (
        <Grid
            container
            spacing={3}
            justifyContent="center"
        >
            {items.map((drink) => (
                <Grid
                    key={drink.id}
                    size={12}
                    sx={{
                        width: "100%",

                        /*
                         * До 1024px:
                         * одна картка на всю ширину.
                         */
                        "@media (min-width: 1024px)": {
                            width: "calc(50% - 12px)",
                        },
                    }}
                >
                    <Card drink={drink} />
                </Grid>
            ))}
        </Grid>
    );

    // ==========================================
    // ОКРЕМА КАТЕГОРІЯ
    // ==========================================

    if (activeCategory !== "all") {
        const filteredDrinks = drinks.filter(
            (drink) =>
                drink.type === activeCategory
        );

        return (
            <Container
                maxWidth="xl"
                sx={{
                    py: 4,
                }}
            >
                {renderCards(filteredDrinks)}
            </Container>
        );
    }

    // ==========================================
    // ВСІ КАТЕГОРІЇ
    // ==========================================

    return (
        <Container
            maxWidth="xl"
            sx={{
                py: 4,
            }}
        >
            {categoryOrder
                .filter(
                    (category) =>
                        category !== "all"
                )
                .map((category, index, array) => {
                    const categoryDrinks =
                        drinks.filter(
                            (drink) =>
                                drink.type ===
                                category
                        );

                    if (
                        !categoryDrinks.length
                    ) {
                        return null;
                    }

                    /*
                     * Перевіряємо, чи це остання
                     * категорія з товарами.
                     *
                     * Щоб після останньої категорії
                     * не залишати зайвий margin.
                     */
                    const categoriesWithDrinks =
                        array.filter(
                            (item) =>
                                drinks.some(
                                    (drink) =>
                                        drink.type ===
                                        item
                                )
                        );

                    const isLastCategory =
                        category ===
                        categoriesWithDrinks[
                            categoriesWithDrinks.length -
                                1
                        ];

                    return (
                        <Box
                            key={category}
                            sx={{
                                mb: isLastCategory
                                    ? 0
                                    : 8,
                            }}
                        >
                            {/* ==========================
                                НАЗВА КАТЕГОРІЇ
                            ========================== */}

                            <Typography
                                variant="h4"
                                sx={{
                                    mb: 3,

                                    fontWeight: 700,

                                    color: "#d4af37",

                                    textTransform:
                                        "uppercase",

                                    letterSpacing:
                                        "1px",
                                }}
                            >
                                {
                                    categoryLabels[
                                        category
                                    ]
                                }
                            </Typography>

                            {/* ==========================
                                КАРТКИ
                            ========================== */}

                            {renderCards(
                                categoryDrinks
                            )}
                        </Box>
                    );
                })}
        </Container>
    );
}
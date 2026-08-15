import { Container, Grid, Typography, Box } from "@mui/material";

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

    const renderCards = (items) => (
        <Grid
            container
            spacing={3}
            justifyContent="center"
        >
            {items.map((drink) => (
                <Grid
                    key={drink.id}
                    size={{
                        xs: 12,
                        sm: 6,
                        md: 6,
                        lg: 6,
                    }}
                >
                    <Card drink={drink} />
                </Grid>
            ))}
        </Grid>
    );

    if (activeCategory !== "all") {
        const filteredDrinks = drinks.filter(
            (drink) => drink.type === activeCategory
        );

        return (
            <Container
                maxWidth="xl"
                sx={{ py: 4 }}
            >
                {renderCards(filteredDrinks)}
            </Container>
        );
    }

    return (
        <Container
            maxWidth="xl"
            sx={{ py: 4 }}
        >
            {categoryOrder
                .filter((category) => category !== "all")
                .map((category) => {
                    const categoryDrinks = drinks.filter(
                        (drink) => drink.type === category
                    );

                    if (!categoryDrinks.length) {
                        return null;
                    }

                    return (
                        <Box
                            key={category}
                            sx={{ mb: 8 }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    mb: 3,
                                    fontWeight: 700,
                                    color: "#d4af37",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                }}
                            >
                                {categoryLabels[category]}
                            </Typography>

                            {renderCards(categoryDrinks)}
                        </Box>
                    );
                })}
        </Container>
    );
}
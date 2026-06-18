import {
    Grid,
    Container,
    Typography,
    Box,
} from '@mui/material';

import drinks from '../../data/data.json';
import Card from '../Card';

import { useCategoryStore } from '../../store/useCategoryStore';

import {
    categoryOrder,
    categoryLabels,
} from '../../helpers/categories';

export default function DrinksList() {
    const activeCategory = useCategoryStore(
        (state) => state.activeCategory
    );

    if (activeCategory !== 'all') {
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
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                >
                    {filteredDrinks.map(
                        (drink, index) => (
                            <Grid
                                key={index}
                                size={{
                                    xs: 12,
                                    sm: 6,
                                    md: 6,
                                    lg: 6,
                                }}
                            >
                                <Card drink={drink} />
                            </Grid>
                        )
                    )}
                </Grid>
            </Container>
        );
    }

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
                        category !== 'all'
                )
                .map((category) => {
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

                    return (
                        <Box
                            key={category}
                            sx={{
                                mb: 8,
                            }}
                        >
                            <Typography
                                variant="h4"
                                fontWeight={700}
                                sx={{
                                    mb: 3,

                                    color:
                                        '#d4af37',

                                    textTransform:
                                        'uppercase',

                                    letterSpacing:
                                        '1px',
                                }}
                            >
                                {
                                    categoryLabels[
                                        category
                                    ]
                                }
                            </Typography>

                            <Grid
                                container
                                spacing={3}
                            >
                                {categoryDrinks.map(
                                    (
                                        drink,
                                        index
                                    ) => (
                                        <Grid
                                            key={
                                                index
                                            }
                                            size={{
                                                xs: 12,
                                                sm: 6,
                                                md: 6,
                                                lg: 6,
                                            }}
                                        >
                                            <Card
                                                drink={
                                                    drink
                                                }
                                            />
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        </Box>
                    );
                })}
        </Container>
    );
}
import { useState } from 'react';

import {
    Card,
    CardMedia,
    Box,
    Typography,
    Chip,
    useMediaQuery,
} from '@mui/material';

import TestImage from '../../assets/test_image.jpeg';

import {
    categoryLabels,
    categoryColors,
} from '../../helpers/categories';

export default function DrinkCard({ drink }) {
    const isMobile = useMediaQuery('(max-width:768px)');

    const [isExpanded, setIsExpanded] =
        useState(false);

    return (
        <Card
            onClick={() => {
                if (isMobile) {
                    setIsExpanded(
                        !isExpanded
                    );
                }
            }}
            onMouseEnter={() => {
                if (!isMobile) {
                    setIsExpanded(true);
                }
            }}
            onMouseLeave={() => {
                if (!isMobile) {
                    setIsExpanded(false);
                }
            }}
            sx={{
                position: 'relative',

                overflow: 'hidden',

                borderRadius: 5,

                cursor: 'pointer',

                height: 500,

                background: '#181818',

                transition:
                    'all .3s ease',

                '&:hover': {
                    boxShadow:
                        '0 0 30px rgba(212,175,55,0.25)',
                },

                '&:hover .drink-image': {
                    transform:
                        'scale(1.08)',
                },

                '&::after': {
                    content: '""',

                    position:
                        'absolute',

                    inset: 0,

                    background:
                        'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)',

                    transform:
                        isExpanded
                            ? 'translateX(150%)'
                            : 'translateX(-150%)',

                    transition:
                        '.8s ease',

                    pointerEvents:
                        'none',
                },
            }}
        >
            <CardMedia
                component="img"
                image={
                    drink.image ||
                    TestImage
                }
                alt={drink.name}
                className="drink-image"
                sx={{
                    width: '100%',
                    height: '100%',

                    objectFit:
                        'cover',

                    transition:
                        '.5s ease',
                }}
            />

            <Box
                sx={{
                    position:
                        'absolute',

                    top: 16,
                    left: 16,
                }}
            >
                <Chip
                    label={
                        categoryLabels[
                            drink.type
                        ] ||
                        drink.type
                    }
                    sx={{
                        background:
                            categoryColors[
                                drink.type
                            ],

                        color: '#fff',

                        fontWeight: 700,

                        fontSize:
                            '0.95rem',

                        height: '40px',

                        '& .MuiChip-label':
                            {
                                px: 2,
                            },

                        textTransform:
                            'uppercase',

                        letterSpacing:
                            '.5px',
                    }}
                />
            </Box>

            <Box
                sx={{
                    position:
                        'absolute',

                    top: 16,
                    right: 16,

                    px: 2.5,
                    py: 1,

                    minWidth:
                        '95px',

                    textAlign:
                        'center',

                    borderRadius:
                        '999px',

                    background:
                        'linear-gradient(135deg,#f7e08a,#d4af37,#f7e08a)',

                    color: '#111',

                    fontWeight: 800,

                    fontSize:
                        '1.1rem',

                    boxShadow:
                        '0 0 20px rgba(212,175,55,0.35)',
                }}
            >
                {drink.price} ₴
            </Box>

            <Box
                className="drink-info"
                sx={{
                    position:
                        'absolute',

                    left: 0,
                    right: 0,
                    bottom: 0,

                    p: 3,

                    color: '#fff',

                    background:
                        'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,0.98))',

                    transform:
                        isExpanded
                            ? 'translateY(0)'
                            : 'translateY(65%)',

                    transition:
                        '.35s ease',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 800,

                        fontSize: {
                            xs: '1.8rem',
                            md: '2.2rem',
                        },

                        letterSpacing: '1px',

                        textTransform: 'uppercase',

                        textShadow:
                            '0 3px 10px rgba(0,0,0,0.6)',

                        mb: 5,

                        lineHeight: 1.1,
                    }}
                >
                    {drink.name}
                </Typography>

                <Box
                    sx={{
                        display:
                            'flex',

                        justifyContent:
                            'space-between',

                        alignItems:
                            'center',

                        py: 1.5,

                        borderTop:
                            '1px solid rgba(255,255,255,0.15)',

                        borderBottom:
                            '1px solid rgba(255,255,255,0.15)',
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            opacity:
                                .8,
                        }}
                    >
                        Об'єм
                    </Typography>

                    <Typography
                        variant="body1"
                        fontWeight={700}
                    >
                        {drink.volume}
                    </Typography>
                </Box>

                <Typography
                    variant="body1"
                    sx={{
                        mt: 3,

                        lineHeight:
                            1.8,

                        opacity:
                            .9,

                        color:
                            'rgba(255,255,255,0.9)',
                    }}
                >
                    {drink.description}
                </Typography>
            </Box>
        </Card>
    );
}
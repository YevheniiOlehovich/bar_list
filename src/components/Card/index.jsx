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
    const [isExpanded, setIsExpanded] = useState(false);

    const handleOpen = () => {
        if (!isMobile) {
            setIsExpanded(true);
        }
    };

    const handleClose = () => {
        if (!isMobile) {
            setIsExpanded(false);
        }
    };

    const handleClick = () => {
        if (isMobile) {
            setIsExpanded((prev) => !prev);
        }
    };

    return (
        <Card
            onClick={handleClick}
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 4,
                cursor: 'pointer',
                height: 500,
                backgroundColor: '#181818',
                transition: 'all .3s ease',

                '&:hover': {
                    boxShadow:
                        '0 0 30px rgba(212,175,55,0.25)',
                },

                '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background:
                        'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)',
                    transform: isExpanded
                        ? 'translateX(150%)'
                        : 'translateX(-150%)',
                    transition: '.8s ease',
                    pointerEvents: 'none',
                    zIndex: 2,
                },
            }}
        >
            <CardMedia
                component="img"
                image={
                    drink?.img_primary ||
                    drink?.image ||
                    TestImage
                }
                alt={drink?.name}
                sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: '.5s ease',
                    transform: isExpanded
                        ? 'scale(1.08)'
                        : 'scale(1)',
                }}
            />

            {drink?.img_secondary && (
                <CardMedia
                    component="img"
                    image={drink.img_secondary}
                    alt={`${drink.name} secondary`}
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: isExpanded ? 1 : 0,
                        transition: 'opacity .4s ease',
                    }}
                />
            )}

            <Box
                sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    zIndex: 3,
                }}
            >
                <Chip
                    label={
                        categoryLabels[drink?.type] ||
                        drink?.type
                    }
                    sx={{
                        background:
                            categoryColors[drink?.type] ||
                            '#d4af37',
                        color: '#fff',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                    }}
                />
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    px: 2,
                    py: 1,
                    borderRadius: 999,
                    background:
                        'linear-gradient(135deg,#f7e08a,#d4af37,#f7e08a)',
                    color: '#111',
                    fontWeight: 800,
                    zIndex: 3,
                }}
            >
                {drink?.price} ₴
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    p: 3,
                    color: '#fff',
                    zIndex: 3,

                    background:
                        'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.35), rgba(0,0,0,0.95))',

                    transform: isExpanded
                        ? 'translateY(0)'
                        : 'translateY(calc(100% - 70px))',

                    transition: '.35s ease',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        mb: 2,
                        fontSize: {
                            xs: '1.5rem',
                            md: '2rem',
                        },
                    }}
                >
                    {drink?.name}
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent:
                            'space-between',
                        py: 1.5,
                        borderTop:
                            '1px solid rgba(255,255,255,0.15)',
                        borderBottom:
                            '1px solid rgba(255,255,255,0.15)',
                    }}
                >
                    <Typography>
                        Об'єм
                    </Typography>

                    <Typography
                        fontWeight={700}
                    >
                        {drink?.volume}
                    </Typography>
                </Box>

                <Typography
                    sx={{
                        mt: 2,
                        lineHeight: 1.7,
                        opacity: 0.9,
                    }}
                >
                    {drink?.description}
                </Typography>
            </Box>
        </Card>
    );
}
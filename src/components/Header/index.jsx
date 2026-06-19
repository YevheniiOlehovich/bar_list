import { useState } from 'react';

import { menu as drinks } from '../../data/data';

import {
    AppBar,
    Toolbar,
    Button,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import {
    categoryLabels,
    categoryOrder,
} from '../../helpers/categories';

import { useCategoryStore } from '../../store/useCategoryStore';

export default function Header() {
    const isMobile = useMediaQuery('(max-width:768px)');

    const [open, setOpen] = useState(false);

    const activeCategory = useCategoryStore(
        (state) => state.activeCategory
    );

    const setActiveCategory = useCategoryStore(
        (state) => state.setActiveCategory
    );

    const existingTypes = new Set(
        drinks.map((drink) => drink.type)
    );

    const categories = categoryOrder.filter(
        (category) =>
            category === 'all' ||
            existingTypes.has(category)
    );

    return (
        <AppBar
            position="sticky"
            elevation={0}
            sx={{
                background:
                    'rgba(15,15,15,0.85)',

                backdropFilter:
                    'blur(20px)',

                WebkitBackdropFilter:
                    'blur(20px)',

                boxShadow: 'none',

                borderBottom:
                    '1px solid rgba(255,255,255,0.08)',
            }}
        >
            <Toolbar
                sx={{
                    minHeight: '80px',
                }}
            >
                {isMobile ? (
                    <>
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent:
                                    'flex-end',
                            }}
                        >
                            <IconButton
                                onClick={() =>
                                    setOpen(true)
                                }
                                sx={{
                                    color: '#fff',
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>

                        <Drawer
                            anchor="right"
                            open={open}
                            onClose={() =>
                                setOpen(false)
                            }
                            sx={{
                                '& .MuiDrawer-paper': {
                                    width: '75vw',
                                    maxWidth:
                                        '320px',

                                    background:
                                        'rgba(15,15,15,0.75)',

                                    backdropFilter:
                                        'blur(20px)',

                                    color: '#fff',

                                    borderLeft:
                                        '1px solid rgba(255,255,255,0.08)',

                                    boxShadow:
                                        'none',
                                },

                                '& .MuiBackdrop-root':
                                    {
                                        background:
                                            'rgba(0,0,0,0.35)',

                                        backdropFilter:
                                            'blur(4px)',
                                    },
                            }}
                        >
                            <List
                                sx={{ pt: 2 }}
                            >
                                {categories.map(
                                    (
                                        category
                                    ) => (
                                        <ListItem
                                            key={
                                                category
                                            }
                                            disablePadding
                                        >
                                            <ListItemButton
                                                onClick={() => {
                                                    setActiveCategory(
                                                        category
                                                    );

                                                    setOpen(
                                                        false
                                                    );
                                                }}
                                                sx={{
                                                    mx: 1,
                                                    my: 0.5,

                                                    borderRadius: 2,

                                                    color:
                                                        activeCategory ===
                                                        category
                                                            ? '#d4af37'
                                                            : '#fff',

                                                    background:
                                                        activeCategory ===
                                                        category
                                                            ? 'rgba(212,175,55,0.15)'
                                                            : 'transparent',

                                                    '&:hover':
                                                        {
                                                            background:
                                                                'rgba(255,255,255,0.08)',
                                                        },
                                                }}
                                            >
                                                <ListItemText
                                                    primary={
                                                        categoryLabels[
                                                            category
                                                        ]
                                                    }
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                    )
                                )}
                            </List>
                        </Drawer>
                    </>
                ) : (
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent:
                                'center',
                            alignItems:
                                'center',
                            gap: 2,
                            flexWrap:
                                'wrap',
                        }}
                    >
                        {categories.map(
                            (category) => (
                                <Button
                                    key={
                                        category
                                    }
                                    onClick={() =>
                                        setActiveCategory(
                                            category
                                        )
                                    }
                                    sx={{
                                        background:
                                            activeCategory ===
                                            category
                                                ? 'rgba(212,175,55,0.2)'
                                                : 'rgba(255,255,255,0.08)',

                                        backdropFilter:
                                            'blur(10px)',

                                        borderRadius:
                                            '30px',

                                        px: 3,
                                        py: 1,

                                        textTransform:
                                            'none',

                                        fontWeight: 600,

                                        color:
                                            activeCategory ===
                                            category
                                                ? '#d4af37'
                                                : '#fff',

                                        border:
                                            activeCategory ===
                                            category
                                                ? '1px solid rgba(212,175,55,0.5)'
                                                : '1px solid transparent',

                                        boxShadow:
                                            'none',

                                        transition:
                                            '0.2s ease',

                                        '&:hover':
                                            {
                                                background:
                                                    activeCategory ===
                                                    category
                                                        ? 'rgba(212,175,55,0.3)'
                                                        : 'rgba(255,255,255,0.18)',

                                                transform:
                                                    'translateY(-2px)',
                                            },
                                    }}
                                >
                                    {
                                        categoryLabels[
                                            category
                                        ]
                                    }
                                </Button>
                            )
                        )}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}
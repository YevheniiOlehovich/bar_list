import { useRef } from "react";
import { Box } from "@mui/material";

import Header from "../Header";
import DrinksList from "../DrinksList";

export default function MenuSection() {
    const menuRef = useRef(null);

    const handleCategoryChange = () => {
        menuRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <Box
            ref={menuRef}
            component="section"
            id="menu"
            sx={{
                minHeight: "auto",
                background: "#111",
            }}
        >
            <Header
                onCategoryChange={
                    handleCategoryChange
                }
            />

            <DrinksList />
        </Box>
    );
}
import { Box, IconButton, Typography } from "@mui/material"

function Lead() {
    return (
        <Box>
            <Typography fontWeight={525} variant="h2" textAlign="center" gutterBottom>
                ORANGO BREAD
            </Typography>
            <Typography variant="body1" textAlign="center" gutterBottom>
                Fresh, home-baked, and nutritious bread with the finest bananas
                and other locally produced fruits such as nectarines, apples,
                blueberries many more! Orango Bread aims for a healthier,
                juicier and more sustainable diet for all -- especially after
                some good exercise outdoors!
            </Typography>
        </Box>
    )
}

export default Lead;
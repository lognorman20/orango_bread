import { Grid, Box, Button, Link, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';

function Lead() {
    return (
        <Box>
            <Typography fontWeight={525} variant="h2" textAlign="center" gutterBottom>
                ORANGO BREAD
            </Typography>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                mb={1}
            >
                <Grid item>
                    <Link href="https://www.instagram.com/orangobread/" target="_blank" rel="noopener noreferrer">
                        {/* TODO: Change background color of this button */}
                        <Button startIcon={<InstagramIcon />} variant="contained" style={{ borderRadius: 20, backgroundColor: '#C13584', color: 'white' }}>
                            Instagram
                        </Button>
                    </Link>
                </Grid>
            </Grid>

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
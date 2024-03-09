import { Box, Typography } from "@mui/material"

function AboutUs() {
    return (
        <Box>
            <Typography variant="h4" textAlign="center" gutterBottom>
                ABOUT US
            </Typography>
            <Typography variant="body1" textAlign="center" gutterBottom>
                Our journey began in the flat of international student housing
                at the University of Otago, where we discovered our passion for
                baking and creating delicious treats. We are committed to
                creating a more sustainable and healthy lifestyle for our
                customers, using high-quality ingredients and traditional baking
                methods.

                <br/><br/>

                At Orango Bread, we believe in the promotion of the outdoors and
                the benefits of spending time in nature. Our bread is not only a
                delicious treat but also a reminder to get outside, enjoy the
                fresh air, and live a healthy, active lifestyle. Join us on our
                mission to bake the best bread for a healthier you and a
                healthier planet!
            </Typography>
        </Box>
    )
}

export default AboutUs;
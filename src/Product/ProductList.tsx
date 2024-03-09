import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';
import { Box, Typography } from '@mui/material';

const products = [
  {
    productName: "The Brick",
    productDescription: "A loaf of our signature banana bread.",
    imgRef: "loaf.jpeg",
    link: "https://buy.stripe.com/test_4gwbLcfyLe9G17GfZ0"
  },
  {
    productName: "The Katana",
    productDescription: "A singular slice of our banana bread.",
    imgRef: "slice.jpeg",
    link: "https://buy.stripe.com/test_14k8z086jc1y17G9AB"
  }
];

export default function ProductList() {
  return (
    <Box>
      <Typography variant="h4" textAlign="center" gutterBottom>
        DELICACIES
      </Typography>
      <Grid
        container
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
        mb={2}
      >
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} style={{ minWidth: '200px', minHeight: '200px' }}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}


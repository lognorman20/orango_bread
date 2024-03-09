import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Grid, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function ProductCard({
  productName,
  productDescription,
  imgRef,
  link
}: {
  productName: string;
  productDescription: string;
  imgRef: string;
  link: string;
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imgRef}
        alt={productName}
      />
      <CardContent style={{ backgroundColor: '#ffe135', padding: '8px' }}>
        <Grid container alignItems="baseline" justifyContent="space-between">
          <Typography gutterBottom variant="h5" component="div" style={{alignSelf: 'flex-start' }}>
            {productName}
          </Typography>
          <Button
            variant="contained"
            style={{fontWeight: 'bold', backgroundColor: 'black', color: '#ffe135', borderRadius: 20 }}
            href={link}
          >
            Order
          </Button>
        </Grid>

        <Typography variant="body1" color="text.secondary">
          {productDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}

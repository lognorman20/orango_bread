import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

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
    // TODO: Reformat this card to be more purchase focused
    <Link href={link} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imgRef}
            alt={productName}
          />
          <CardContent style={{ backgroundColor: '#f2dd08', padding: '8px' }}>
            <Typography gutterBottom variant="h5" component="div">
              {productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {productDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

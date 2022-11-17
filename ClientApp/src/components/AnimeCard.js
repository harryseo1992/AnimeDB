import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const AnimeCard = ({animeProps}) => {

  const truncate = (str) => {
    return str?.length > 80 ? str.substring(0, 77) + "..." : str;
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          src={animeProps.imageUrl}
          alt="Anime Picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {animeProps.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncate(animeProps.description)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default AnimeCard;

import AnimeCard from "./AnimeCard.js";
import AnimeSkeleton from "./AnimeSkeleton.js";
import { Grid } from "@mui/material";

const AnimeCardComponent = ({ animes, loadingData }) => {
  return (
    <Grid container>
      {animes.map((anime) => {
        return (
          <Grid item xs={12} sm={4} sx={{ padding: 5 }}>
            {loadingData ? (
              <AnimeSkeleton />
            ) : (
              <AnimeCard key={anime.id} animeProps={anime} />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AnimeCardComponent;

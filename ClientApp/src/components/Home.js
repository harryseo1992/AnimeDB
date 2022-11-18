import React from 'react';
import useFetch from './FetchData.js';
import { Box } from '@mui/material';
import AnimeCardComponent from './AnimeCardComponent.js';
import { getAnimeUrl } from '../utils/Constants.js';
import AddAnime from './AddAnime.js';

const Home = () => {
  const [animes, animesError, animesLoading] = useFetch(getAnimeUrl);

  const loadingData = animesLoading;

  return (
    <>
      <AddAnime />
      <Box p={5}>
        {animes && (
          <>
           <AnimeCardComponent animes={animes} loadingData={loadingData} />
          </>
        )}
      </Box>
    </>
  );
}

export default Home;

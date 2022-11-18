import React, { useEffect, useState } from 'react';
import { 
  Button, 
  Dialog, 
  DialogTitle,
  DialogContent, 
  DialogContentText, 
  TextField, 
  DialogActions
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { usePost } from './FetchData';

const AddAnime = () => {
  const [animeToAdd, setAnimeToAdd] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [open, setOpen] = useState(false);
  const [addAnimeResponse, addAnimeResponseError, addAnimeResponseLoading] = usePost("/api/animes", animeToAdd);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    setAnimeToAdd({
      "title": title,
      "description": description,
      "imageUrl": imageUrl
    })
    setOpen(false);
  }

  useEffect(() => {
    if (addAnimeResponse.id) {
      navigate("/");
    }
  }, [addAnimeResponse])

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add anime
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>AnimeDB</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add your anime
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            value={title}
            fullWidth
            variant="standard"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Description"
            value={description}
            fullWidth
            variant="standard"
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ImageUrl"
            value={imageUrl}
            fullWidth
            variant="standard"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <LoadingButton onClick={handleAdd}>{addAnimeResponse.id ? "Added" : "Add"}</LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddAnime;
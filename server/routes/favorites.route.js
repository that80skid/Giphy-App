const express = require('express');
const router = express.Router();
const favoritesModels = require('../model/favorites.model');

//Adding Favorites
router.post('/add', (req, res) => {
  const userId = req.body.userId;
  const gif = req.body.gif;

  if (!userId || !gif.gifId || !gif.title || !gif.url) {
    return res.send({ success: false, msg: 'Invalid data provided.' });
  }
  favoritesModels.addFavorites(res, userId, gif);
})

//Deleting Favorites
router.delete('/remove/:id', (req, res) => {
  const id = req.params.id
  favoritesModels.removeFavorites(res, id);
})

//Grabbing Favorites by User
router.get('/user/:id', (req, res) => {
  const userId = req.params.id
  favoritesModels.favoritesByUser(res, userId);
})

module.exports = router;

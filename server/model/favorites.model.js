const pool = required('../config/mysql.config');

function addFavorites(res, userId, gif) {
// INSERT
pool.query('INSERT INTO favorites (userId, gifId, title, url) VALUES (?, ?, ?, ?)',
[userId, gif.gifId, gif.title, gif.url], (err) => {
    if (err) {
      return res.send({ success: false, msg: 'Something went wrong, please try again later.'})
    }
    return res.send({ success: true, msg: 'Successfully added to favorites.'});
  })
}

function removeFavorites(res, id) {
// DELETE
  pool.query('DELETE FROM favorites WHERE favorites.id = ?', [id], (err) => {
    if (err) {
      return res.send({ success: false, msg: 'Something went wrong, please try again later.' })
    }
    return res.send({ success: true, msg: 'Successfully removed from favorites.'});
  })
}

function favoritesByUser(res, userId) {
  pool.query('SELECT * FROM favorites WHERE favorites.userId = ?', [userId], (err, results, field) => {
    if (err) {
      return res.send({ success: false, msg: 'Something went wrong, please try again later.' })
    }
    return res.send({ success: true, favorites: results});
  })
}

module.exports.addFavorites = addFavorites;
module.exports.removeFavorites = removeFavorites;
module.exports.favoritesByUser = favoritesByUser;

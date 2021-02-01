const axios = require ("axios");

module.exports = {
  getGoogleBooks: function(req, res) {
    const urlGoogle = `https://www.googleapis.com/books/v1/volumes?q=${req.params.keyword}` +
      `&key=${process.env.API_KEY}`;
    axios.get(urlGoogle)
    .then(response => res.json(response.data.items))
    .catch(error => res.status(400).json(error));
  }
};
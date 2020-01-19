const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

// index (todos), show (unico), store (criar), update (alterar), destroy (deletar)

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },

  async store(req, res) {
    // cadastro

    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      // remove espacamentos antes e depois de uma string
      const techsArray = parseStringAsArray(techs);

      const githubResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );
      const { name = login, avatar_url, bio } = githubResponse.data;

      const location = {
        type: "Point",
        coordinates: [parseFloat(longitude), parseFloat(latitude)]
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }

    return res.json(dev);
  }
};

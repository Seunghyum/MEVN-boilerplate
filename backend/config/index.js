const config = {
  home_url: process.env.NODE_ENV == "production" ? "Production URL" : "http://localhost:3000",
  db_path: process.env.NODE_ENV == "production" ? 'mongodb://mongo/ncc' : 'mongodb://localhost/ncc',
}

module.exports = config;
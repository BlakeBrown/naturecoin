module.exports = {
  apps: [
    {
      name: "Nature Coin",
      script: "./server.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};

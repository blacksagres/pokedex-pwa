/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass',
  ],
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    /* ... */
    '@definitions': './src/definitions',
    '@components': './src/components',
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
};

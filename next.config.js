module.exports = {
  basePath: process.env.NODE_ENV === 'production' ? '/next-learn-blog' : '',
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://pebblepark.github.io/next-learn-blog/'
      : '',
  images: {
    loader: 'akamai',
    path:
      process.env.NODE_ENV === 'production'
        ? 'https://pebblepark.github.io/next-learn-blog/'
        : '/',
  },
};

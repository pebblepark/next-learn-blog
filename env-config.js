module.exports = {
  'process.env.RESOURCE_URL':
    process.env.NODE_ENV === 'production'
      ? 'https://pebblepark.github.io/next-learn-blog'
      : '',
};

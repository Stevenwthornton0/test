module.exports = {
  PORT: process.env.PORT || 8000,
  DATABASE_URL: process.env.DATABASE_URL,
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV || 'development'
}
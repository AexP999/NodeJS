module.exports = {
  PORT: process.env.PORT || 3000,
  DB_CONNECTION_URL: process.env.DB_CONNECTION_URL || 'mongodb://localhost:27017/Les1',
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'secret_word',
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'refresh_secret_word',
  ACCESS_TOKEN_EXP_TIME: '10m',
  REFRESH_TOKEN_EXP_TIME: '10d',
  SYSTEMS_EMAIL: process.env.SYSTEMS_EMAIL || 'test@a.com.ua',
  SYSTEMS_EMAIL_PASSWORD: process.env.SYSTEMS_EMAIL_PASSWORD || '12345',
};

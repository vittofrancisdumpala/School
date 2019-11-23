const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb+srv://i708563:T1gc6JzX2utzaFcE@cluster0-vlu1n.mongodb.net/hospitalDB?retryWrites=true&w=majority',
  port: process.env.PORT || 3030,
  env: process.env.NODE_ENV || 'dev'
};

export default config;

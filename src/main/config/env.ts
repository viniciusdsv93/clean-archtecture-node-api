export default {
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://localhost:2701/clean-node-api',
  port: process.env.PORT ?? 5050
}

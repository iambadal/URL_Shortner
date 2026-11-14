import { createClient } from "redis";

const redisClient = createClient({
  username: process.env.REDIS_USERNAME || "default",
  password: process.env.REDISPASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT || 6379),
  },
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));

export default redisClient;
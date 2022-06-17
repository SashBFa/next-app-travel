import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.1jnaq.mongodb.net/geegam"
  )
  .then(() => {
    console.log("⚡️[server]: Connect to MongoDB");
  })
  .catch((err) => {
    console.log("⚡️[server]: Failed to connect to MongoDB", err);
  });

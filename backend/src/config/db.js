import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MONGDB CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.error("Error connecting to MONGOODB", error);
    process.exit(1); // exited with failure
  }
};

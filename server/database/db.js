import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error", error.message);
  }
};

export default Connection;

import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const { connection } = await mongoose.connect(
      "mongodb+srv://nextjsuser:nextjsuser@cluster0.ctp4fau.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "student",
      }
    );
    console.log(`MongoDB connected: ${connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

export default connectDatabase;

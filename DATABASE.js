import mongoose from "mongoose";

const DB_CONNECTION = async () => {
  const MONGO_URI = `mongodb+srv://samreen090909:sam090909@cluster0.rwrpzug.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONGO_URI);
    console.log("mongo connected succesfully");
  } catch (error) {
    console.error("errror with connected db", error.message);
  }
};
export default DB_CONNECTION;

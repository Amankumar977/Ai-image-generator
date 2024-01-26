import mongoose from "mongoose";
const connectToDb = async () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("The Mongo Db is connected ");
    })
    .catch(() => {
      console.log("There is some error while connecting to Mongo DB.");
    });
};
export default connectToDb;

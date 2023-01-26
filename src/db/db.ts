import { connect } from "mongoose";
import configs from "../configs";

// database connection with mongoose
const mongoConnect = async () => {
  try {
    const mongo = await connect(configs.uri);
    console.log("Database successfully connected!");
    return mongo;
  } catch (error) {
    console.log("Database connection error", error);
  }
};

export default mongoConnect;

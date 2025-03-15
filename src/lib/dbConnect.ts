import { DB_NAME } from "@/constants";
import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

// the void in TS means: I dont care what type of data comes in return, that is why i m using void
async function dbConnect(): Promise<void> {
  // Checking if we alreay have a connection
  if (connection.isConnected) {
    console.log("DB is already connected");
    return;
  }

  // Connecting to the DB
  try {
    console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(connectionInstance);

    // this returns a number
    connection.isConnected = connectionInstance.connections[0].readyState;
  } catch (error) {
    console.log("MongoDB connection error", error);
    throw new Error("Failed to connect to the DB");
  }
}

export default dbConnect;

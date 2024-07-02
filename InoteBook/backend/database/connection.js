import { connect } from "mongoose";

async function createConnection(mongoURI) {
  try {
    const connection = await connect(mongoURI);
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
}

export { createConnection };

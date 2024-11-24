import { connect } from "mongoose";

async function createConnection(MONGO_URI) {
  try {
    const connection = await connect(MONGO_URI);
    return connection;
  } catch (error) {
    console.log(`Error while creting DB connection:`, error.message);
    process.exit(1);
  }
}

export { createConnection };

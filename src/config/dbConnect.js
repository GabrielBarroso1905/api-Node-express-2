import mongoose from "mongoose";

mongoose.connect(process.env.TESTE);

let db = mongoose.connection;

export default db;
import mongoose from "mongoose";
import 'dotenv/config';

mongoose.connect(process.env.DATABASE);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', () => {
    console.log('Database conected successfully!');
});

export default db;
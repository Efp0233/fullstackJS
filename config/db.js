import mongoose from 'mongoose'; // corregido 'moongoose'

const conectarDB = async () => {
  try {
    // Evita la advertencia de 'strictQuery'
    mongoose.set('strictQuery', false);

    const db = await mongoose.connect(process.env.MONGO_URI);

    const url = `${db.connection.host}:${db.connection.port}`;
    console.log(`MongoDB connected: ${url}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default conectarDB;

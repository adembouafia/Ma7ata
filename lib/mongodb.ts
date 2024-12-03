import mongoose from "mongoose";

// Fonction pour connecter MongoDB
export const connectMongoDB = async (): Promise<void> => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("La variable d'environnement MONGODB_URI est manquante.");
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions); // Ajout des options nécessaires pour éviter les warnings

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error; // Rejette l'erreur pour qu'elle soit gérée ailleurs si besoin
  }
};

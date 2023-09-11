import express from "express";
import chatGestionadoRoutes from "./ChatGestionadoRoutes";

export const registeredRoutes = express.Router();

registeredRoutes.use("/chat-gestionado", chatGestionadoRoutes);

export default registeredRoutes;

import express from "express";
import ChatGestionadoController from "../controllers/ChatGestionadoController";

const chatGestionadoRoutes = express.Router();

chatGestionadoRoutes.get("/chats", ChatGestionadoController.getChats);

export default chatGestionadoRoutes;

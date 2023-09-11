import { NextFunction, Request, Response } from "express";
import ChatGestionadoRepository from "../repositories/ChatGestionadoRepository";

class ChatGestionadoController {
  public static async getChats(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const chats = await ChatGestionadoRepository.getInstance().getChats();
      res.status(200).json(chats);
    } catch (error) {
      next(error);
    }
  }
}

export default ChatGestionadoController;

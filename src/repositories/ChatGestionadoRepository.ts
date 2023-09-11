import { ChatGestionado } from "../models/ChatGestionado";
import { IChatGestionadoService } from "../services/interfaces/IChatGestionadoService";
import { ChatGestionadoMySQL } from "../services/mysql/ChatGestionadoMySQL";

class ChatGestionadoRepository {
  private static instance: ChatGestionadoRepository;
  private service: IChatGestionadoService;

  public static getInstance(): ChatGestionadoRepository {
    if (!this.instance) {
      this.instance = new ChatGestionadoRepository();
    }

    return this.instance;
  }

  private constructor() {
    this.service = new ChatGestionadoMySQL();
  }

  public async getChats(): Promise<ChatGestionado[]> {
    return this.service.getChats();
  }
}

export default ChatGestionadoRepository;

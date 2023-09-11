import { ChatGestionado } from "../../models/ChatGestionado";

export interface IChatGestionadoService {
  getChats(): Promise<ChatGestionado[]>;
}

import { ChatGestionado } from "../../models/ChatGestionado";
import { anyToChatGestinado } from "../../parsers/ChatGestionadoParser";
import { IChatGestionadoService } from "../interfaces/IChatGestionadoService";
import { MySQLConnection } from "./MysqlConnection";

export class ChatGestionadoMySQL implements IChatGestionadoService {
  async getChats(): Promise<ChatGestionado[]> {
    try {
      const result = await MySQLConnection.getInstance().query(
        "SELECT idConversacion, idAsesor, nombreAsesor, idLead, nombreLead, fechaInicio, fechaFin, estado, primeraRespuesta, duracionChat FROM TBL_reportesGestionChats;"
      );

      return result.map(anyToChatGestinado);
    } catch (error) {
      return [];
    }
  }
}

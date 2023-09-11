import { ChatGestionado } from "../models/ChatGestionado";

export function anyToChatGestinado(chat: any): ChatGestionado {
  const chatGestionado: ChatGestionado = {
    idConversacion: chat.idConversacion,
    idAsesor: chat.idAsesor,
    nombreAsesor: chat.nombreAsesor,
    idLead: chat.idLead,
    nombreLead: chat.nombreLead,
    fechaInicio: chat.fechaInicio,
    fechaFin: chat.fechaFin,
    estado: chat.estado,
    primeraRespuesta: chat.primeraRespuesta,
    duracionChat: chat.duracionChat,
  };

  return chatGestionado;
}

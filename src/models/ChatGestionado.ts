export interface ChatGestionado {
  idConversacion: string;
  idAsesor: string;
  nombreAsesor: string;
  idLead: string;
  nombreLead: string;
  fechaInicio: Date;
  fechaFin: Date;
  estado: string;
  primeraRespuesta: Date;
  duracionChat: number;
}

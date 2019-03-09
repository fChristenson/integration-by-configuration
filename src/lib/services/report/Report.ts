import { ClientId } from "./ClientId";

export interface IReport {
  clientId: ClientId;
  createdAt: Date;
  mimeType: MimeType;
  rawData: ArrayBuffer;
  report?: object;
}

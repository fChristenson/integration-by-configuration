import { ClientId } from "./ClientId";

export enum ReportStatus {
  SCHEDULED,
  PROCESSING,
  DONE,
  PROCESSING_FAILED,
}
export interface IReport {
  clientId: ClientId;
  createdAt: Date;
  mimeType: MimeType;
  rawData: ArrayBuffer;
  status: ReportStatus;
  report?: object;
}

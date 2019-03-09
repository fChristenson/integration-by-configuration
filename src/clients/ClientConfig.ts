import { ClientId } from "../lib/services/report/ClientId";

export interface IClientConfig {
  clientId: ClientId; // Customer client id so we know it is them calling our service
}

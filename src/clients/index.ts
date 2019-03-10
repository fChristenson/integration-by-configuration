import { ClientId } from "../lib/services/report/ClientId";
import { IClientConfig } from "./ClientConfig";
import { config as googleConfig } from "./google";
import { IGoogleConfig } from "./google/GoogleConfig";
import { config as myBankConfig } from "./myBank";
import { IMyBankConfig } from "./myBank/MyBankConfig";
import { config as spotifyConfig } from "./spotify";

export interface IConfigs {
  clientIdHeader: string;
  requestCodeHeader: string;
  googleConfig: IGoogleConfig;
  spotifyConfig: IClientConfig;
  myBankConfig: IMyBankConfig;
  activeClientId: ClientId;
}

export const configs: IConfigs = {
  activeClientId: process.env.ACTIVE_CLIENT_ID || myBankConfig.clientId,
  clientIdHeader: "X-client-id",
  googleConfig,
  myBankConfig,
  requestCodeHeader: "X-code",
  spotifyConfig,
};

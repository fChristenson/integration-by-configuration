import { clientId } from "./clientId";
import { healthUrl } from "./healthUrl";
import { IMyBankConfig } from "./MyBankConfig";
import { routes } from "./routes/myBankRoutes";

export const config: IMyBankConfig = {
  accessTokenUrl: "http://mybank.se",
  clientId,
  docxReportsUrl: "http://mybank.se",
  healthUrl,
  jsonReportsUrl: "http://mybank.se",
  requestArrivalHeader: "X-request-arrived-at",
  routes,
  serviceId: "token",
  serviceIdHeader: "X-my-bank-id",
  xmlReportsUrl: "http://mybank.se",
};

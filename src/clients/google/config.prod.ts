import { clientId } from "./clientId";
import { IGoogleConfig } from "./GoogleConfig";
import { healthUrl } from "./healthUrl";
import { routes } from "./routes/googleRoutes";

export const config: IGoogleConfig = {
  clientId,
  healthUrl,
  routes,
  serviceId: "token",
  serviceIdHeader: "X-google-service-id",
};

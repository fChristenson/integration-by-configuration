import { NextFunction, Request, Response } from "express";
import { configs } from "../../clients";

/**
 * If this middleware starts to grow too big we will split this out in to multiple
 * middlewares or move the logic in to a client specific service.
 */
export function headerMiddleware(req: Request, res: Response, next: NextFunction) {
  const { googleConfig, myBankConfig } = configs;

  switch (configs.activeClientId) {
    case googleConfig.clientId:
      /* tslint:disable */
      console.log(`Adding headers for ${googleConfig.clientId}`);
      res.setHeader(googleConfig.serviceIdHeader, googleConfig.serviceId);
      break;

    case myBankConfig.clientId:
      /* tslint:disable */
      console.log(`Adding headers for ${myBankConfig.clientId}`);
      res.setHeader(myBankConfig.serviceIdHeader, myBankConfig.serviceId);
      res.setHeader(myBankConfig.requestArrivalHeader, new Date().toISOString());
      break;

    default:
      break;
  }

  return next();
}

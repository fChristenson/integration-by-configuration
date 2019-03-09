import { NextFunction, Request, Response } from "express";
import { configs } from "../../clients";
import { StatusError } from "../errors/StatusError";

export function clientValidationMiddleware(req: Request, res: Response, next: NextFunction) {
  const clientId = req.header(configs.clientIdHeader);

  switch (clientId) {
    case configs.activeClientId:
      return next();

    default:
      return next(new StatusError("Invalid clientId provided", 400));
  }
}

import { NextFunction, Request, Response } from "express";
import { StatusError } from "../errors/StatusError";

const dateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

export function rangeMiddleware(req: Request, res: Response, next: NextFunction) {
  if (dateRegex.test(req.query.from) && dateRegex.test(req.query.to)) {
    return next();
  }

  let message = `Please provide query parameters from: ${req.query.from}, to: ${req.query.to}`;
  message = message + " in the format: ####-##-## e.g 1970-01-01";
  return next(new StatusError(message, 400));
}

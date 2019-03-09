import { Application, NextFunction, Request, Response } from "express";
import { configs } from "./clients";
import { StatusError } from "./lib/errors/StatusError";
import { middlewares } from "./lib/middleware";
import { reportService } from "./lib/services";
/* tslint:disable */
const express = require("express");

export const app: Application = express();

app.use(express.json());

app.use(middlewares);

/**
 * It is rare that we want to pass in a whole req or res object but this is an exception.
 * We need to optimize for maximum flexibility without adding any overhead to clients
 * that don't require custom behaviour.
 * 
 * What we are going for is to delay client specific logic for as long as possible
 * until the request reaches a service that knows how to handle the custom behaviour.
 */
app.get("/reports", async (req: Request, res: Response) => {
  await reportService.getReports(req, res);
});

app.post("/reports", async (req: Request, res: Response) => {
  await reportService.processRequest(req, res);
});

// it is useful to add a log for every permutation case so you know the path the request takes
switch (configs.activeClientId) {
  case configs.myBankConfig.clientId:
    /* tslint:disable */
    console.log(`Loading routes for ${configs.myBankConfig.clientId}`);
    app.use(configs.myBankConfig.routes)
    break;

  case configs.googleConfig.clientId:
    /* tslint:disable */
    console.log(`Loading routes for ${configs.googleConfig.clientId}`);
    app.use(configs.googleConfig.routes)
    break;

  default:
    break;
}

app.use((error: StatusError, req: Request, res: Response, _: NextFunction) => {
  res.status(error.statusCode).json({ error: error.message });
});

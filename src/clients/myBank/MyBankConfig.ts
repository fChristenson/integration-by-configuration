import { Router } from "express";
import { IClientConfig } from "../ClientConfig";

export interface IMyBankRequestCodes {
  base64RequestCode: string; // this code should return the response as base64
}

export interface IMyBankConfig extends IClientConfig {
  requestCodes: IMyBankRequestCodes;
  serviceId: string; // MyBank wants all their services to include this token
  serviceIdHeader: string; // name of the serviceId header,
  healthUrl: string;
  requestArrivalHeader: string; // for some odd reason they want this header too
  accessTokenUrl: string;
  xmlReportsUrl: string;
  jsonReportsUrl: string;
  docxReportsUrl: string;
  routes: Router;
}

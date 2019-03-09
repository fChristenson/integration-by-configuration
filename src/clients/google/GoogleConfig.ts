import { Router } from "express";
import { IClientConfig } from "../ClientConfig";

export interface IGoogleConfig extends IClientConfig {
  serviceId: string; // Google wants all their services to include this token
  serviceIdHeader: string; // name of the serviceId header
  healthUrl: string;
  routes: Router;
}

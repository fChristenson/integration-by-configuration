import { Router } from "express";
import { healthUrl } from "../healthUrl";

export const routes = Router();

routes.get(healthUrl, (req, res) => {
  res.end();
});

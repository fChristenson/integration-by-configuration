import { clientValidationMiddleware } from "./clientValidationMiddleware";
import { headerMiddleware } from "./headerMiddleware";
import { rangeMiddleware } from "./rangeMiddleware";

export const middlewares = [
  headerMiddleware,
  rangeMiddleware,
  clientValidationMiddleware,
];

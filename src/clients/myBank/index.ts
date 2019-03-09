import { config as devConfig } from "./config.dev";
import { config as prodConfig } from "./config.prod";

export const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

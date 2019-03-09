import { app } from "./src/app";
import { configs } from "./src/clients";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  /* tslint:disable */
  console.log(`Active clientId ${configs.activeClientId} running on port ${port}`);
  console.log('--------------------------');
});

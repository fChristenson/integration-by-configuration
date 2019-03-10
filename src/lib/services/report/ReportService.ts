import { Request, Response } from "express";
import { configs } from "../../../clients";
import { MyBankService } from "../../../clients/myBank/services/MyBankService";
import { IReport } from "./Report";

export class ReportService {
  private myBankService: MyBankService;

  constructor(myBankService: MyBankService) {
    this.myBankService = myBankService;
  }

  public async processRequest(req: Request, res: Response) {
    // we convert the data in to a standard format
    // we store files for scheduled processing at a later date
    // we schedule a request to convert big files in to a report
    return res.end();
  }

  /**
   * We maintain a generic interface but under the hood we have a path
   * that will lead to the custom behaviour so if the request is from
   * our "special" client we hande it according to their needs but otherwise
   * we will use the default behaviour.
   */
  public async getReports(req: Request, res: Response) {
    let result = [];
    const clientId = req.header(configs.clientIdHeader);
    const requestCode = req.header(configs.requestCodeHeader);

    switch (clientId) {
      case configs.myBankConfig.clientId:
        /* tslint:disable */
        console.log(`Getting external reports for ${clientId}`);
        result = await this.getExternalReports(req, res);
        break;

      default:
        // go to the database
        /* tslint:disable */
        console.log(`Getting stored reports for ${clientId}`);
        break;
    }

    /**
     * By using a request code there is no limit to what we can express allowing 
     * our client to request almost anything with configuration alone.
     * 
     * A good mental picture is to use the clientId for things that are always true
     * for that client and the request code to express deviations.
     */
    switch (requestCode) {
      case configs.myBankConfig.requestCodes.base64RequestCode:
        /* tslint:disable */
        console.log(`Converting response to base64 for client ${clientId} with code ${requestCode}`);
        return res.end(Buffer.from(JSON.stringify(result)).toString("base64"));

      default:
        return res.json(result);
    }
  }

  private async getExternalReports(req: Request, res: Response): Promise<IReport[]> {
    let result = [];
    const clientId = req.header(configs.clientIdHeader);

    switch (clientId) {
      case configs.myBankConfig.clientId:
        /* tslint:disable */
        console.log(`Making external request for ${clientId}`);
        result = await this.myBankService.getReports(req, res);
        break;

      default:
        break;
    }

    return result;
  }
}

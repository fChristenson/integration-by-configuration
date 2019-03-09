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
    return res.json([]);
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

    return res.json(result);
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

import axios from "axios";
import { Request, Response } from "express";
import { config } from "../../../clients/myBank";
import { IReport } from "../../../lib/services/report/Report";
import { IAccessToken } from "./AccessToken";

export class MyBankService {
  public async getReports(req: Request, res: Response): Promise<IReport[]> {
    // const accessToken = await this.getAccesToken();
    // const rawReports = await this.getReportData(accessToken);
    return [];
  }

  private async getReportData(accessToken: IAccessToken): Promise<any> {
    const promise1 = axios.post(config.jsonReportsUrl, { accessToken });
    const promise2 = axios.post(config.xmlReportsUrl, { accessToken });
    const promise3 = axios.post(config.docxReportsUrl, { accessToken });
    const [
      response1,
      response2,
      response3,
    ] = await Promise.all([promise1, promise2, promise3]);

    return [response1.data, response2.data, response3.data];
  }

  private async getAccesToken(): Promise<IAccessToken> {
    const response = await axios.post(config.accessTokenUrl, { serviceId: config.serviceId });
    return response.data;
  }
}

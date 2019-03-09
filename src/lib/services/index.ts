import { MyBankService } from "../../clients/myBank/services/MyBankService";
import { ReportService } from "./report/ReportService";

export const myBankService = new MyBankService();
export const reportService = new ReportService(myBankService);

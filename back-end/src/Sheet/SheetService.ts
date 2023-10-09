import Sheet from "./SheetModel";
import SheetModel from "./SheetModel";
import SheetRepository from "./SheetRepository";
const sheetsDatabase = require("../../database/sheets.json");

export class SheetService {
  createSheetQuestionnaire() { 
    const sheets = SheetRepository.getAllSheets()
    const currentDate = new Date(); 
    if (sheets) {
      return sheetsDatabase.sheets.filter(
        (sheet: Sheet) => {
          const sheetDate = new Date();
          const timeDiff = currentDate.getTime() - sheetDate.getTime();
          const categoryFrequency = Math.pow(2, sheet.category - 1);
      
          return timeDiff >= categoryFrequency || timeDiff === 0;
        }
      );
    }
  }
}


export default new SheetService()

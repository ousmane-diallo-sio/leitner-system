import SheetModel from "./SheetModel";
import Sheet from "./SheetModel";

const fs = require('fs');

const dataFilePath = './database/sheets.json';
const sheetsDatabase = require("../../database/sheets.json");

export class SheetRepository {

  getAllSheets(): SheetModel[] {
    return sheetsDatabase.sheets;
  }
  
  getOneSheet(sheetId: number): SheetModel | null {
    const sheet = sheetsDatabase.sheets.find(
      (sheet: SheetModel) => sheet.id === sheetId
      );
      if (sheet) {
        sheet.lastAttempted = new Date()
        this.updateSheet(sheetId, sheet)
      }
    return sheet;
  }
  
  
  createSheet(sheet: Sheet): void {
    sheetsDatabase.sheets.push(sheet);
    const data = JSON.stringify(sheetsDatabase, null, 2);
    fs.writeFileSync(dataFilePath, data);
  }
  
  updateSheet(sheetId: number, updatedSheet: Sheet): void {
    const sheetToUpdate = sheetsDatabase.sheets.find((sheet: SheetModel) => sheet.id === sheetId);
    if (!sheetToUpdate) {
      throw new Error('Feuille non trouvée');
    }
    sheetToUpdate.category = updatedSheet.category; 
    const updatedData = JSON.stringify(sheetsDatabase, null, 2);
    fs.writeFileSync(dataFilePath, updatedData);
  }

  
}

export default new SheetRepository();

const fs = require('fs');

const dataFilePath = '../database/sheets.json';


function readSheets(): Sheet[] {
  const data = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(data);
}

function writeSheets(sheets: Sheet[]): void { // Ajoutez le type Sheet[] ici
  const data = JSON.stringify(sheets, null, 2);
  fs.writeFileSync(dataFilePath, data);
}

function getSheet(sheetId: number): Sheet | undefined { 
  const sheets = readSheets();
  return sheets.find((sheet) => sheet.id === sheetId);
}

function createSheet(sheet: Sheet): void {
  const sheets = readSheets();
  sheets.push(sheet);
  writeSheets(sheets);
}

function updateSheet(sheetId: number, updatedSheet: Sheet): void { 
  const sheets = readSheets();
  const index = sheets.findIndex((sheet) => sheet.id === sheetId);

  if (index === -1) {
    throw new Error('Sheet not found');
  }

  sheets[index] = updatedSheet;
  writeSheets(sheets);
}

function deleteSheet(sheetId: number): void { 
  const sheets = readSheets();
  const index = sheets.findIndex((sheet) => sheet.id === sheetId);

  if (index === -1) {
    throw new Error('Sheet not found');
  }

  sheets.splice(index, 1);
  writeSheets(sheets);
}

module.exports = {
  readSheets,
  writeSheets,
  getSheet,
  createSheet,
  updateSheet,
  deleteSheet,
};
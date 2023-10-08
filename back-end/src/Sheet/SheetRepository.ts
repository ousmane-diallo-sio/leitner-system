const fs = require('fs');

const dataFilePath = '../db/sheets.json'


function readSheets() {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
}
  
function writeSheets(sheets) {
    const data = JSON.stringify(sheets, null, 2);
    fs.writeFileSync(dataFilePath, data);
}
  
function getSheet(sheetId) {
    const sheets = readSheets();
    return sheets.find((sheet) => sheet.id === sheetId);
}
  
function createSheet(sheet) {
    const sheets = readSheets();
    sheets.push(sheet);
    writeSheets(sheets);
}
  
function updateSheet(sheetId, updatedSheet) {
    const sheets = readSheets();
    const index = sheets.findIndex((sheet) => sheet.id === sheetId);
  
    if (index === -1) {
      throw new Error('Sheet not found');
    }
  
    sheets[index] = updatedSheet;
    writeSheets(sheets);
}
  
function deleteSheet(sheetId) {
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
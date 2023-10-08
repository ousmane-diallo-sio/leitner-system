<<<<<<< HEAD
const sheetRepository = require('./SheetRepository');

function createSheetQuestionnaire(userId: string) { // Ajoutez un type explicite ici, si userId est de type string
  const sheets = sheetRepository.readSheets();
  const currentDate = new Date(); 
  const userSheets = sheets.filter((sheet: any) => {
=======

const sheetRepository = require('./SheetRepository');

function createSheetQuestionnaire(userId) {
  const sheets = SheetRepository.readSheets();
  const currentDate = new Date(); 
  const userSheets = sheets.filter((sheet) => {
>>>>>>> 2a3df93ddebde79b2ee396c6ba21baec7d5c649a
    const sheetDate = new Date(sheet.lastAttempted || 0);
    const timeDiff = currentDate.getTime() - sheetDate.getTime();
    const categoryFrequency = Math.pow(2, sheet.category - 1);

    return timeDiff >= categoryFrequency || timeDiff === 0;
  });
}

module.exports = {
  createSheetQuestionnaire,
};
<<<<<<< HEAD
=======


>>>>>>> 2a3df93ddebde79b2ee396c6ba21baec7d5c649a


const sheetRepository = require('./SheetRepository');

function createSheetQuestionnaire(userId) {
  const sheets = SheetRepository.readSheets();
  const currentDate = new Date(); 
  const userSheets = sheets.filter((sheet) => {
    const sheetDate = new Date(sheet.lastAttempted || 0);
    const timeDiff = currentDate.getTime() - sheetDate.getTime();
    const categoryFrequency = Math.pow(2, sheet.category - 1);

    return timeDiff >= categoryFrequency || timeDiff === 0;
  });
}

module.exports = {
  createSheetQuestionnaire,
};



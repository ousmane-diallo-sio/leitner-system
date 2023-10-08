const SheetRepository = require('./SheetRepository');

function compareAnswers(sheetId, userAnswer) {
  const sheet = SheetRepository.getSheet(sheetId);

  if (sheet.answer === userAnswer) {
    return true; 
  } else {
    SheetRepository.updateSheetCategory(sheetId, '1');
    return false;
  }
}

module.exports = {
  compareAnswers,
};

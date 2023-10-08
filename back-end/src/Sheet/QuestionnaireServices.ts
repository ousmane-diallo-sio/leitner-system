const SheetRepository = require('./SheetRepository');

<<<<<<< HEAD
function compareAnswers(sheetId: string, userAnswer: string): boolean {
=======
function compareAnswers(sheetId, userAnswer) {
>>>>>>> 2a3df93ddebde79b2ee396c6ba21baec7d5c649a
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

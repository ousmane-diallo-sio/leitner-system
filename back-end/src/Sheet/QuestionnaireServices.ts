import SheetRepository from "./SheetRepository";

export class QuestionnaireServices {

  compareAnswers(sheetId: number, userAnswer: string): boolean{
    const sheet = SheetRepository.getOneSheet(sheetId);
    console.log(sheet);
  
    if (sheet) {
      if (sheet?.answer === userAnswer) {
        sheet.category++;
        return true;
      } else {
        sheet.category = 1;
        SheetRepository.updateSheet(sheetId, sheet);
        return false;
      }
    }
    throw Error("Feuille non trouvée")
  }

}

export default new QuestionnaireServices();
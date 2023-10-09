import SheetRepository from "./SheetRepository";

export class QuestionnaireServices {

  compareAnswers(sheetId: number, userAnswer: string): boolean{
    const sheet = SheetRepository.getOneSheet(sheetId);
    console.log(sheet);
  
    if (sheet) {
      if (sheet?.answer === userAnswer) {
        return true;
      } else {
        sheet.category = 0;
        SheetRepository.updateSheet(sheetId, sheet);
        return false;
      }
    }
    throw Error("Sheet undefined")
  }

}

export default new QuestionnaireServices();
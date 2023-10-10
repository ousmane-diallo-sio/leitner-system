const express = require('express');
const router = express.Router();
import { Request, Response } from 'express';
import SheetRepository from './SheetRepository';
import QuestionnaireServices from './QuestionnaireServices';
import SheetService from './SheetService';


router.post('/', (req: Request, res: Response) => {
  const newSheet = req.body;

  const existingSheet = SheetRepository.getOneSheet(newSheet.id);
  if (existingSheet) {
    return res.status(409).json({ data: null, error: 'Feuille déjà existante' });
  } else {
    SheetRepository.createSheet(newSheet);
    res.status(201).json({ data: newSheet });
  }
});

router.get('/', (_: Request, res: Response) => {
  const sheets = SheetRepository.getAllSheets();
  res.status(200).json({ data: sheets });
  if (sheets) {
    res.status(200).json({ data: sheets });
  }
} );

router.post('/questionnaire', (_: Request, res: Response) => {
  const sheets = SheetService.createSheetQuestionnaire();
  res.status(201).json({data: sheets,  message: 'Feuille créée avec succès'});
});

router.get('/:sheetId', (req: Request, res: Response) => {
  const sheetId = req.params.sheetId;
  const sheets = SheetRepository.getOneSheet(+sheetId);
  console.log(sheets);
  
  if (sheets) {
    res.status(200).json({ data: sheets });
  } else {
    res.status(404).json({ data: null, message: 'Feuille non trouvée' });
  }
});

router.put('/:sheetId/updateCategory', (req: Request, res: Response) => {
  const sheetId = req.params.sheetId;
  const userAnswer = req.body.userAnswer;

  try {
    const sheet = SheetRepository.getOneSheet(+sheetId)
    const isCorrect = QuestionnaireServices.compareAnswers(+sheetId, userAnswer);
    console.log(isCorrect);
    console.log(sheet);

    if (sheet) {
      if (isCorrect) {
          SheetRepository.updateSheet(+sheetId, sheet);
        res.status(200).json({ data: sheet, message: 'Réponse correcte, catégorie mise à jour' });
      } else {
        res.status(200).json({ data: sheet, message: 'Réponse incorrecte' });
      }
    }
  } catch (error) {
    res.status(404).json({ data: null, message: 'Feuille non trouvée' });
  }
});

export default router;
const express = require('express');
const router = express.Router();
const SheetRepository = require('./SheetRepository.ts');
import { Request, Response } from 'express';


router.post('/sheet', (req: Request, res: Response) => {
  const newSheet = req.body;
  SheetRepository.createSheet(newSheet);
  res.status(201).json({ message: 'Feuille créée avec succès' });
});

router.put('/:sheetId/updateCategory', (req: Request, res: Response) => {
  const sheetId = req.params.sheetId;
  const userAnswer = req.body.userAnswer;

  try {
    const isCorrect = SheetRepository.compareAnswers(sheetId, userAnswer);

    if (isCorrect) {
        SheetRepository.updateSheetCategory(sheetId, '1');
      res.status(200).json({ message: 'Réponse correcte, catégorie mise à jour' });
    } else {
      res.status(200).json({ message: 'Réponse incorrecte' });
    }
  } catch (error) {
    res.status(404).json({ message: 'Feuille non trouvée' });
  }
});

export default router;
const express = require('express');
const router = express.Router();
const sheetServices = require('./SheetService');

router.post('/sheets', (req: any, res: any) => {
    const newSheet = req.body;
    sheetServices.createSheet(newSheet);
    res.status(201).json({ message: 'Feuille créée avec succès' });
});

router.put('/sheets/:sheetId/updateCategory', (req: any, res: any) => {
    const sheetId = req.params.sheetId;
    const userAnswer = req.body.userAnswer;

    try {
        const isCorrect = sheetServices.compareAnswers(sheetId, userAnswer);

        if (isCorrect) {
           
            sheetServices.updateSheetCategory(sheetId, '1'); 
            res.status(200).json({ message: 'Réponse correcte, catégorie mise à jour' });
        } else {
            res.status(200).json({ message: 'Réponse incorrecte' });
        }
    } catch (error) {
        res.status(404).json({ message: 'Feuille non trouvée' });
    }
});

module.exports = router;

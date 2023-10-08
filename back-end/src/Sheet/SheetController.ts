const express = require('express');
const router = express.Router();
const sheetServices = require('./SheetService'); 

router.post('/sheets', sheetServices.createSheet);
router.post('/sheets/questionnaire', sheetServices.triggerQuestionnaire);
router.get('/sheets', sheetServices.getUserSheets);
router.put('/sheets/:sheetId/validate', sheetServices.validateSheet);
router.get('/sheets/tags/:tag', sheetServices.getSheetsByTag);
router.post('/sheets/notify', sheetServices.setNotification);

module.exports = router;

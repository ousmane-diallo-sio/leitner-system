import React, { FC, useState } from "react";
import styles from './components/styles.module.scss'
import { AnimatePresence, motion } from "framer-motion";
import sheetsService from "../SheetsService";

type SheetProps = {
  sheet: SheetType
  isFromQuestionnaire?: boolean
}

const SheetCard: FC<SheetProps> = ({ sheet, isFromQuestionnaire }) => {

  const [isAnswerVisible, setShowAnswer] = useState(false)

  const [userAnswer, setUserAnswer] = useState('')
  const [showAnswerOverlay, setShowAnswerOverlay] = useState(false)

  return (
    <div className={styles['sheet-card']}>
      <div className="flex flex-col">
        <b className="text-center text-lg text-slate-800">{sheet.tags}</b>
        <p>Catégorie : {sheet.category}</p>
        <b className="text-center text-lg text-slate-800">{sheet.question}</b>
      </div>

      {isAnswerVisible && (
        <div className="flex flex-1 flex-col">
          <p>Réponse : {sheet.answer}</p>
        </div>
      )}

      {isFromQuestionnaire ? (
        <>
          <input
            className="w-full"
            type="text"
            value={userAnswer}
            placeholder="Votre réponse"
            onChange={(e) => setUserAnswer(e.target.value)} />
          {userAnswer &&
            <button
              className="bg-slate-700 text-white w-full mt-2"
              onClick={() => setShowAnswerOverlay(true)}
            >
              Valider
            </button>
          }
        </>
      ) : (
        <button
          className={`w-full text-white m-auto ${styles[isAnswerVisible ? 'btn-hide' : 'btn-show']}`}
          onClick={() => setShowAnswer(!isAnswerVisible)}
        >
          {isAnswerVisible ? 'Cacher la réponse' : 'Afficher la réponse'}
        </button>
      )}

      <AnimatePresence>
        {showAnswerOverlay && (
          <motion.div
            className={styles['answer-overlay']}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'spring', stiffness: 200, damping: 19 }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              enter: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 100 },
            }}>
            <div className="flex flex-col">
              <b>Réponse du questionnaire : {sheet.answer}</b>
              <br />
              <b>Votre réponse : {userAnswer}</b>
            </div>
            <div className="flex flex-col mb-4">
              <button
                className="bg-green-600 text-white mb-2"
                onClick={async () => 
                  await sheetsService.answerQuestionnaire(sheet.id, sheet.answer)
                }
              >
                Bonne réponse
              </button>
              <button
                className=" bg-red-500 text-white"
                onClick={async () => 
                  await sheetsService.answerQuestionnaire(sheet.id, userAnswer)
                }
              >
                Mauvaise réponse
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default SheetCard
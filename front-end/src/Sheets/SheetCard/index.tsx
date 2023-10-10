import React, { FC, useState } from "react";
import styles from './components/styles.module.scss'

type SheetProps = {
  sheet: SheetType
}

const SheetCard: FC<SheetProps> = ({sheet}) => {

  const [isAnswerVisible, setShowAnswer] = useState(false)
  
  return (
    <div className={styles['sheet-card']}>
      <div className="flex flex-1 flex-col">
        <b className="text-center text-lg text-slate-800">{sheet.tags}</b>
        <p>Catégorie : {sheet.category}</p>
        <b className="text-center text-lg text-slate-800">{sheet.question}</b>
      </div>

      {isAnswerVisible && (
        <div className="flex flex-1 flex-col">
          <p>Réponse : {sheet.answer}</p>
        </div>
      )}

      <button
        className={`w-full text-white ${styles[isAnswerVisible ? 'btn-hide' : 'btn-show']}`}
        onClick={() => setShowAnswer(!isAnswerVisible)}
      >
        {isAnswerVisible ? 'Cacher la réponse' : 'Afficher la réponse'}
      </button>
    </div>
  )
}

export default SheetCard
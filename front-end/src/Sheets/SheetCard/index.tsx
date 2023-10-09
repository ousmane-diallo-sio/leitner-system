import React, { FC } from "react";
import styles from './components/styles.module.scss'

type SheetProps = {
  sheet: SheetType
}

const SheetCard: FC<SheetProps> = ({sheet}) => {
  
  return (
    <div className={styles['sheet-card']}>
      <b className="text-center text-lg text-slate-800">{sheet.question}</b>
    </div>
  )
}

export default SheetCard
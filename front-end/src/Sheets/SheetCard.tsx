import React, { FC } from "react";

type SheetProps = {
  sheet: SheetType
}

const SheetCard: FC<SheetProps> = ({sheet}) => {
  
  return (
    <div className=" flex flex-col w-96 h-60 items-center rounded-md shadow-xl shadow-slate-300 bg-slate-200 p-8 m-8">
      <b className="text-center text-slate-800">{sheet.question}</b>
    </div>
  )
}

export default SheetCard
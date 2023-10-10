/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import PageWrapper from "../../router/components/PageWrapper";
import sheetsService from "../../Sheets/SheetsService";
import sheetMobx, { Sheet } from "../../Sheets/SheetsMobx";
import SheetCard from "../../Sheets/SheetCard";

const Sheets = () => {

  useEffect(() => {
    sheetsService.getSheets()
  }, [])

  return (
    <PageWrapper childKey="Dashboard" title="Mes questions" navBar>
      <main className="w-full flex flex-1 flex-col px-6">
        {sheetMobx.sheets.map((sheet, index) => (
          <SheetCard key={index} sheet={sheet} />
        ))}
      </main>
    </PageWrapper>
  )
}

export default Sheets
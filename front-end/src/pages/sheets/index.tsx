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
      <main className="w-full flex flex-1 flex-col">
        <section className="w-full flex flex-wrap px-6">
          {sheetMobx.sheets.map((sheet, index) => (
            <SheetCard key={index} sheet={sheet} />
          ))}

        </section>
        {/* <div className="sticky bottom-3 w-full flex justify-center mt-5">
          <button
            className="bg-blue-500 text-white px-8 py-4 rounded-full"
              
          >
            Créer une nouvelle fiche
          </button>
        </div> */}
      </main>
    </PageWrapper>
  )
}

export default Sheets
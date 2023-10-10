/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";

import NavBar from "../../router/components/NavBar";
import PageWrapper from "../../router/components/PageWrapper";
import SheetCard from "../../Sheets/SheetCard";
import sheetsService from "../../Sheets/SheetsService";
import sheetMobx from "../../Sheets/SheetsMobx";

const Dashboard = () => {

  useEffect(() => {
    sheetsService.getQuestionnaire()
  })

  return (
    <PageWrapper childKey="Dashboard" title="Dashboard" navBar>
      <main className="w-full flex flex-1 flex-col px-6">
        <h2>Mes fiches à réviser</h2>
        {sheetMobx.questionnaire.length === 0
          ? <p>Vous n'avez pas de fiche à réviser</p>
          : sheetMobx.questionnaire.map((sheet, index) => (
            <SheetCard key={index} sheet={sheet} isFromQuestionnaire />
          ))}
      </main>
    </PageWrapper>
  )
}

export default Dashboard
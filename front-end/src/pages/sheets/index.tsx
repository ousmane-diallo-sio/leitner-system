/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PageWrapper from "../../router/components/PageWrapper";
import SheetCard from "../../Sheets/SheetCard";

const Sheets = () => {

  const sheet: SheetType = {
    answer: 'fyhg',
    category: 'fgh',
    question: 'Quel est le nom de la capitale de la France ?',
    tags: ''
  }

  return (
    <PageWrapper childKey="Dashboard" title="Mes questions" navBar>
      <main className="w-full flex flex-1 flex-col px-6">
        <SheetCard sheet={sheet} />
      </main>
    </PageWrapper>
  )
}

export default Sheets
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import NavBar from "../../router/components/NavBar";
import PageWrapper from "../../router/components/PageWrapper";
import SheetCard from "../../Sheets/SheetCard";

const Dashboard = () => {

  return (
    <PageWrapper childKey="Dashboard" title="Dashboard" navBar>
      <main className="w-full flex flex-1 flex-col px-6">
        <h2>Mes fiches à réviser</h2>
      </main>
    </PageWrapper>
  )
}

export default Dashboard
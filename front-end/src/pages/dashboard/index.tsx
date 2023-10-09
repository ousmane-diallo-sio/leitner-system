/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import NavBar from "../../router/components/NavBar";
import PageWrapper from "../../router/components/PageWrapper";

const Dashboard = () => {

  return (
    <PageWrapper key="Dashboard">
      <main>
        <NavBar />
        <h1>Dashboard</h1>
      </main>
    </PageWrapper>
  )
}

export default Dashboard
import React from "react";
import { Outlet } from "react-router-dom";
import { MainNav } from "../components/MainNav";

export const Root = () => {
  return (
    <>
      <MainNav></MainNav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

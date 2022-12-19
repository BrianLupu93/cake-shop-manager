import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Navigation/Sidebar";
import Topbar from "./Navigation/Topbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Cofetarie from "./components/Cofetarie/Cofetarie";
import ComandaNoua from "./components/Cofetarie/ComandaNoua";
import ListaComenzi from "./components/Cofetarie/ListaComenzi";
import Laborator from "./components/Laborator/Laborator";
import Retete from "./components/Laborator/Retete";
import ActivitateLaborator from "./components/Laborator/ActivitateLaborator";
import StocLaborator from "./components/Laborator/StocLaborator";
import Depozit from "./components/Depozit/Depozit";
import StocDepozit from "./components/Depozit/StocDepozit";
import ListaCumparaturi from "./components/Depozit/ListaCumparaturi";
import Utilizatori from "./components/Utilizatori/Utilizatori";
import LogOut from "./components/Log-In-Out/LogOut";

const MainContainer = () => {
  return (
    <div className="container-scroller">
      <Topbar />
      <div className="container-fluid page-body-wrapper pt-0">
        <Sidebar />
        <div className="main-panel">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cofetarie" element={<Cofetarie />} />
            <Route path="/comanda-noua" element={<ComandaNoua />} />
            <Route path="/lista-comenzi" element={<ListaComenzi />} />
            <Route path="/laborator" element={<Laborator />} />
            <Route path="/retete" element={<Retete />} />
            <Route
              path="/activitate-laborator"
              element={<ActivitateLaborator />}
            />
            <Route path="/stoc-laborator" element={<StocLaborator />} />
            <Route path="/depozit" element={<Depozit />} />
            <Route path="/stoc-depozit" element={<StocDepozit />} />
            <Route path="/lista-cumparaturi" element={<ListaCumparaturi />} />
            <Route path="/utilizatori" element={<Utilizatori />} />
            <Route path="/logout" element={<LogOut />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;

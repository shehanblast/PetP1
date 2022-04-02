import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//routes
import About from "../pages/about";
import AddStrategicTerm from "../components/strategiesTerm/addStrategicTerms";
import KanbanBoard from "../pages/kanban/kanbanBoard";
import AddStrategicCard from "../pages/kanban/StrategicCard/addStrategicCard";
import Kanban from "../pages/kanban/Kanban";
import EditStrategicCard from "../pages/kanban/StrategicCard/editStrategicCard";

function Roots () {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/about" element={<About/>} />
                    <Route path="/strageticTerm" element={<AddStrategicTerm />} />
                    <Route path="/EditStrageticCard/:id" element={<EditStrategicCard />} />
                    <Route path="/strageticCard" element={<AddStrategicCard />} />
                    <Route path="/kanbanBoard" element={<KanbanBoard />} />
                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/" element={<About/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default Roots;


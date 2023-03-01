import React from "react";
import Todo from "./Pages/Todo"
import TrafficLight from "./Pages/TrafficLight";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Todo />} />
                <Route path="/trafficlight" element={<TrafficLight />} />
            </Routes>
        </Router>
    );
}

export default App;


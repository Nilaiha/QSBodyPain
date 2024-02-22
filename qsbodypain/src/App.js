import React, { useState, useRef } from "react";
import "./App.css";
import { BodyMale } from "./components/BodyMale";
import ButtonGroup from "./components/ButtonGroup";
import Header from "./components/Header";
import Prompt from "./components/Prompt";

function App() {
    const [shownAreas, setShownAreas] = useState({});
    const [clickPoints, setClickPoints] = useState([]);
    const svgRef = useRef(null);

    const handleAreaClick = (event) => {
        setShownAreas({ ...shownAreas, [event.target.id]: true });
        handleSvgClick(event);
        console.log("SVG path clicked!", {
            event,
            id: event.target.id,
            shownAreas,
            clickPoints,
        });
    };

    const resetShownAreas = () => {
        setShownAreas({});
        setClickPoints([]);
        console.log("resetted", shownAreas);
    };

    const handleSvgClick = (event) => {
        const svg = svgRef.current;
        if (!svg) return;

        const rect = svg.getBoundingClientRect();
        const x = event.clientX - rect.left; // x position within the element.
        const y = event.clientY - rect.top; // y position within the element.

        console.log({ svg, event, rect });

        // Calculate the SVG coordinates
        const xRatio = svg.viewBox.baseVal.width / rect.width;
        const yRatio = svg.viewBox.baseVal.height / rect.height;
        const svgX = x * xRatio;
        const svgY = y * yRatio;

        // Update state with new point
        setClickPoints([...clickPoints, { x: svgX, y: svgY }]);
    };

    return (
        <div className="app">
            <Header />
            <div className="main-area">
                <Prompt />
                <BodyMale
                    handleAreaClick={handleAreaClick}
                    shownAreas={shownAreas}
                    handleSvgClick={handleSvgClick}
                    clickPoints={clickPoints}
                    svgRef={svgRef}
                />
            </div>
            <ButtonGroup resetShownAreas={resetShownAreas} />
        </div>
    );
}

export default App;

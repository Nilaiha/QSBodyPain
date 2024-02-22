import React, { useState } from "react";
import "./App.css";
import { BodyMale } from "./components/BodyMale";
import ButtonGroup from "./components/ButtonGroup";
import Header from "./components/Header";
import Prompt from "./components/Prompt";

function App() {
    const [shownAreas, setShownAreas] = useState({});

    const handleAreaClick = (event) => {
        console.log("SVG path clicked!", event, event.target.id, shownAreas);
        setShownAreas({ ...shownAreas, [event.target.id]: true });
    };

    const resetShownAreas = () => {
        setShownAreas({});
        console.log("resetted", shownAreas);
    };

    return (
        <div className="app">
            <Header />
            <div className="main-area">
                <Prompt />
                <BodyMale
                    handleAreaClick={handleAreaClick}
                    shownAreas={shownAreas}
                />
            </div>
            <ButtonGroup resetShownAreas={resetShownAreas} />
        </div>
    );
}

export default App;

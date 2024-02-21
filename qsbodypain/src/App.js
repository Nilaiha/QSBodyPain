import "./App.css";
import { BodyMale } from "./components/BodyMale";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Body Pain Questionnaire</h1>
            </header>
            <body>
                <h2>On the diagram below, please mark where you feel pain.</h2>
                <BodyMale />
            </body>
        </div>
    );
}

export default App;

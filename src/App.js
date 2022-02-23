import './App.css';
// custom components
import backgroundVideo from "./assets/bboy.mp4"

function App() {
    return (
        <div className="App">

            <header className="App-header">
                <video loop autoPlay muted id="video">
                    <source src={backgroundVideo} type="video/mp4"/>
                </video>
                <div>
                    <h1 className="App-title">bboy creative</h1>
                </div>
              
            </header>
        </div>
    );
}

export default App;

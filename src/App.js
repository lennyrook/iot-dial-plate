import logo from './data/images/logo.svg';
import DialPlate from './components/dialPlate/DialPlate';

import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>IoT Dial Plate</p>
            </header>
            <div className="body">
                <DialPlate />
            </div>
        </div>
    );
}

export default App;

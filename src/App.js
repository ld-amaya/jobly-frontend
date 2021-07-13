import Router from './routes/Router';
import Navbar from './routes/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>  
    </div>
  );
}

export default App;

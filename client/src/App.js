
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Navebar from './component/Navbar/Navebar'
import AllRoutes from './AllRoutes'

function App() {
  return (
    <div className="App">
      <Router>
        
        <Navebar />
        <AllRoutes />
      
      </Router>
      
    </div>
  );
} 

export default App;

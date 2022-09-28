import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SinglePost from './components/SinglePost';
import Home from './pages/Home';
function App() {
 

  return (
    <div className="App">
      <Router>

        <Routes>
        <Route exact path='/' element={<Home/>}/>
          <Route exact path='posts/:id' element={<SinglePost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

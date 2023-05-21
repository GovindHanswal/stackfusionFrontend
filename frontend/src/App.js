import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import SubmittedForm from './components/SubmittedForm';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/submitted-form" element={<SubmittedForm/>} />
      </Routes>
    </Router>
     </div>
  );
}

export default App;

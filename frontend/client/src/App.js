import './App.css';
import Navbar from './components/header/Navbar';
import Todo from './components/todo/Main';
import TimeManagmentApp from './components/timemanagement/main'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Todo /> */}
      <TimeManagmentApp />
    </div>
  );
}

export default App;

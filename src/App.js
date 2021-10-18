
import './App.css';
import List from './components/List'
import AddModal from './components/AddModal'
function App() {
  return (
    <div className="App">
     <h1> To Do List </h1> 
     <AddModal/>
     <List/>
    </div>
  );
}

export default App;

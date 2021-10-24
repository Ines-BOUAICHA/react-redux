
import './App.css';
import List from './components/List'
import AddModal from './components/AddModal'
function App() {
  return (
    <div className="App">
     <h1 style={{backgroundColor:"#B0C4DE", color:"black", padding :" 20px" , fontFamily:"Lucida Calligraphy"}}> To Do List </h1> 
    <List/> 
    <AddModal/>
     
    </div>
  );
}

export default App;

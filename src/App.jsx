
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";



function App() {
  return (
    <>
    <div>
        <Header /> 
    </div>
      <div>
        <NavBar /> 
        <div> 
        <ItemListContainer greeting={"Bienvenidos!"}/>
        </div>
      </div>
    </>
  ); 
}


export default App

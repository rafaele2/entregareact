
import '../src/App.css';
import '../src/index.css';
import Navbar from './components/Nabvar/Nabvar';
import ItemListContainer from './components/Nabvar/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Nabvar/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'  

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path= '/' element={<ItemListContainer greeting={'Listado de todos los productos'}/>}/>
     <Route path= '/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos por categoria'}/>}/>
     <Route path='/detail/:productId' element={ <ItemDetailContainer/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

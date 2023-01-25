import logo from './logo.svg';
import './App.css';
import CreateProductPage from './views/CreateProductPage/CreateProductPage.component';
import ProductPage from './views/ProductPage/ProductPage.component';
import EditProductPage from './views/EditProductPage/EditProductPage.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<CreateProductPage/>}/>
          <Route path='/:id/edit' element={<EditProductPage/>}/>
          <Route path='/:id' element={<ProductPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

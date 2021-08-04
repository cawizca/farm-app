import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "../src/styles/hero.css";
import "../src/styles/gallery.css";
import "../src/styles/loginregister.css";
import "../src/styles/form.css";
import "../src/styles/product.css"

import Homepage from './components/HomePage/HomePage';
import GalleryComponent from './components/GalleryPage/GalleryComponent';
import LoginComponent from './components/LoginRegister/Login/Login';
import SignUpComponent from './components/LoginRegister/Register/Registration';
import ProductAdd from './components/ProductAdd/ProductAddComponent'
import Cart from './components/Cart/CartComponent';

function App() {
  return (
    <div>
      <Router>
          <Route path="/" exact component={Homepage} />
          <Route path="/gallery" exact component={GalleryComponent} />
          <Route path="/login" exact component={LoginComponent} />
          <Route path="/register" exact component={SignUpComponent} />
          <Route path="/product" exact component={ProductAdd} />
          <Route path="/cart" exact component={Cart} />
      </Router>
    </div>
  );
}

export default App;

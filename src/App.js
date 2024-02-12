import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Blog from './Components/Blog';
import Feature from './Components/Feature';
import Testimonial from './Components/Testimonial';
import Notfound from './Components/404';
import Contact from './Components/Contact';

function App() {
  return (
      <div>
        <BrowserRouter basename="/">
          <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/product" Component={Product} />
          <Route exact path="/blog" Component={Blog} />
          <Route exact path="/feature" Component={Feature} />
          <Route exact path="/testimonial" Component={Testimonial} />
          <Route exact path="/404" Component={Notfound} />
          <Route exact path="/contact" Component={Contact} />
          </Routes>
        </BrowserRouter>
      </div>
      
  );
}

export default App;

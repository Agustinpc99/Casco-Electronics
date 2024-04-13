import LayoutMain from "./components/LayoutMain"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./views/Home"
import Products from "./views/Products"
import About from "./views/About"
import Contact from "./views/Contact"


function App() {


  return (
    <>
    <BrowserRouter>
      <LayoutMain>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </LayoutMain>
      </BrowserRouter>
    </>
  )
}

export default App

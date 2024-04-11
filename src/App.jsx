import LayoutMain from "./components/LayoutMain"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./views/Home"


function App() {


  return (
    <>
    <BrowserRouter>
      <LayoutMain>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<></>}></Route>
        <Route path="/about" element={<></>}></Route>
        <Route path="/contact" element={<></>}></Route>
        </Routes>
      </LayoutMain>
      </BrowserRouter>
    </>
  )
}

export default App

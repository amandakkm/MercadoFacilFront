import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Paginas/Home/Home'
import Logon from './Paginas/AreaLogada/Home/Home'
import './App.css'
import CadastroUsuario from "./Paginas/CadastroUsuario/CadastroUsuario";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/in" element={<Logon/>}></Route>
        <Route path="/CadastroUsuarios" element={<CadastroUsuario/>}/>
      </Routes>
    </Router>
  );
}

export default App

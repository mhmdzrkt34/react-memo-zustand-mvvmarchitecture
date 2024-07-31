
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";

export default function App(){


  return (



    <Router>


      <Routes>

        <Route element={<HomeView/>} path="/"/>

        
      </Routes>
    </Router>
  )


  
}
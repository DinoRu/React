import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Write from "./pages/write/Write"
import Settings from "./pages/settings/Settings"
import Single from "./pages/single/Single"
import { BrowserRouter, Routes, Route} from "react-router-dom";
function App() {

  const user = false;

  return (
    <BrowserRouter>
      <Topbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/register" element={user ? <Home /> : <Register />}/>
            <Route path="/login" element={user ? <Home /> : <Login />} />
              
            <Route path="/write" element={user ? <Write /> : <Register />} />
            <Route path="/settings" element={user ? <Settings /> : <Register />} />
        
            <Route path="/posts/:postId" element={ <Single />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Auth from "./pages/Auth"
import GoogleAuthWrapper from "./components/GoogleAuthWrapper"

function App() {
  
  return (
    <>
    <div className="min-w-screen min-h-screen bg-[#141414]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<GoogleAuthWrapper/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
    </>
  )
}

export default App

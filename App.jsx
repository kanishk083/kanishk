import { useState } from "react"
import Footer from "./assets/components/Footer"
import Main from "./assets/components/Main"
import SideBar from "./assets/components/SideBar"


function App() {
  const [showModel,setshowModel] = useState(false)
  return (
    <>
    <Main />
    {showModel &&
    (<SideBar />)}
    <Footer />
    
    </>
  )
}

export default App

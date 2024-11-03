import { useState, useEffect } from "react"
import Footer from "./assets/components/Footer"
import Main from "./assets/components/Main"
import SideBar from "./assets/components/SideBar"


function App() {

  const [showModal, setshowModal] = useState(false)


  function handleToggleModal() {
    setshowModal(!showModal)
  }

  useEffect(() => {
    async function APIFetch() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = `GET https://api.nasa.gov/planetary/apod` +
        `?api_key=${NASA_KEY}`;
        

      try {
        const res = await fetch(url)
        const data = await res.json()
        console.log("DATA\n", data)
      } catch (err) {
        console.log("Error",err.message)
      }

    }
    APIFetch()
  }, [])



  return (
    <>
      <Main />
      {showModal && (
        <SideBar />
      )}
      <Footer handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App

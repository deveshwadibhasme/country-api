import { Outlet } from "react-router"
import Header from './components/Header.jsx'

const App = () => {
    return (
      <>
      <Header/>
      <Outlet key={1}/> 
      </>
    )
  }
  
  export default App
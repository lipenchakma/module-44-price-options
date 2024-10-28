import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/Navbar/Navbar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'


function App() {

  return (
    <>
      <div className='container mx-auto'>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      </div>
    </>
  )
}

export default App

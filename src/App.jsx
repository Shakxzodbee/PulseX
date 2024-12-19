import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import CountdownTimer from './components/Time/Time'
import Testimonials from './components/Testeminionals/Testimonials'
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <CountdownTimer />
      <Testimonials />
    </>
  )
}

export default App
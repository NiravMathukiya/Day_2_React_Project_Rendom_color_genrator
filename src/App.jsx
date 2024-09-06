import ColorCards from './components/ColorCards'
import Footer from './components/Footer'
import GradientCards from './components/GradientCards'
import NavLinks from './components/NavLinks'

function App() {
 return(
  <>
  <NavLinks />
  <div className='bg-black  w-screen'>
    <ColorCards />
    <GradientCards />
  </div>
  <Footer />
  </>
  )
}

export default App

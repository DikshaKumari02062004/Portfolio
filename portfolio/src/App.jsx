import react from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Services from './Components/Services'
import About from './Components/About'
import Tips from './Components/Tips'
import BookAppointment from './Components/BookAppointment'
import Testimonials from './Components/Testimonials'

const App = ()=> {
  return (
    <>
    <Header/>
    <Hero/>
    <Services/>
    <About/>
    <Tips/>
    <BookAppointment/>
    <Testimonials/>
    <Footer/>
   </>
  )
}
export default App
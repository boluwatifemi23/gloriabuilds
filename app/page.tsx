import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Properties from './components/Properties'

import Services from './components/Services'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Stats from './components/Stats'
import About from './components/About'


export default function Home() {
  return (
    <main>
      <Cursor />
      <Navbar />
      <Hero />
      <Stats />
      <Properties />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  )
}
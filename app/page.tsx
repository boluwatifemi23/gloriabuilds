import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Properties from './components/Properties'
import Services from './components/Services'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Properties />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  )
}
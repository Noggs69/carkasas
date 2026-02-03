import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Testimonials from '../components/Testimonials'
import Promo from '../components/Promo'
import FinalCTA from '../components/FinalCTA'

const Home = () => {
  return (
    <>
      <Hero />
      <main>
        <Benefits />
        <Testimonials />
        <Promo />
        <FinalCTA />
      </main>
    </>
  )
}

export default Home

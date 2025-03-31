import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'
import TabSection from '@/components/TabSection'
// import TwoColumnCard from '@/components/TwoColumnCard'
import FeaturedAlternate from '@/components/FeaturedAlternate'
import Footer from '@/components/Footer'
import UsesList from '@/components/UsesList'
import SectionWrapper from '@/components/SectionWrapper'
import './index.css'

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <SectionWrapper id='about' heading='ABOUT ME'>
        <TabSection />
      </SectionWrapper>
      {/* <SectionWrapper id='experience' heading='EXPERIENCE'>
            <TwoColumnCard />
          </SectionWrapper> */}
      <SectionWrapper id='demos' heading='DEMOS'>
        <FeaturedAlternate />
      </SectionWrapper>
      <SectionWrapper id='uses' heading='USES'>
        <UsesList />
      </SectionWrapper>
      <Footer />
    </>
  )
}

export default Home

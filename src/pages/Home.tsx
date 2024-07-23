import AboutUs from "../components/Home/AboutUs"
import Banner from "../components/Home/Banner"
import Donate from "../components/Home/Donate"
import Empower from "../components/Home/Empower"
// import HomeForm from "../components/Home/HomeForm"
import Programs from "../components/Home/Program"
import Testimonials from "../components/Home/Testimonials"


const Home = () => {
  return (
  <>
  <Banner/>
  <Donate/>
  <AboutUs/>
  <Programs/>
  <Empower/>
  <Testimonials/>
  {/* <HomeForm/> */}
  </>
  )
}

export default Home
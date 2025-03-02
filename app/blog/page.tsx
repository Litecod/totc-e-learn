import BlogList from "@/components/Blog/BlogList"
import Carousel from "@/components/Blog/Carousel"
import HeroBlog from "@/components/Blog/HeroBlog"
import Marketing from "@/components/Blog/Marketing"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"


const page = () => {
  return (
    <div className="text-[#000]">
        <Navbar />
        <HeroBlog />
        <BlogList />
        <Carousel />
        <Marketing />
        <Footer />
    </div>
  )
}

export default page
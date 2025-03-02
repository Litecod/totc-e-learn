import CourseId from "@/components/Courses/Id/CourseId"
import Education from "@/components/Courses/Id/Education"
import Everthing from "@/components/Courses/Id/Everything"
import Marketing from "@/components/Courses/Id/Marketing"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"


const page = () => {
  return (
    <div className="text-[#000]">
        <Navbar />
        <CourseId />
        <Marketing />
        <Everthing />
        <Education />
        <Footer />
    </div>
  )
}

export default page
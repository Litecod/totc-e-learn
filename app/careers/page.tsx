import Accordion from "@/components/Careers/Accordion"
import ApiTemplate from "@/components/Careers/ApiTemplate"
import BeforeFooter from "@/components/Careers/BeforeFooter"
import Learning from "@/components/Careers/Learning"
import Membership from "@/components/Careers/Membership"
import Students from "@/components/Careers/Students"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"


const page = () => {
  return (
    <div className="text-[#000]">
        <Navbar />
        <Membership />
        <Learning />
        <Accordion />
        <Students />
        <ApiTemplate />
        <BeforeFooter />
        <Footer />
    </div>
  )
}

export default page
"use client"

import Image from "next/image";
import star from "@/public/images/star.png";
import mark from "@/public/images/mark.png";
import { Course } from "@/data/item";
import {
  FaCamera,
  FaChartBar,
  FaFacebook,
  FaFileAlt,
  FaRegClock,
  FaSun,
} from "react-icons/fa";
import Link from "next/link";

//type Params = { params: { id: string } };

const CourseId = () => {

  // if (!params || !params.id) {
  //   return <h1 className="text-red-600">Error: ID not found</h1>;
  // }

  //const {id} = params
  const item = Course.find((item) => item.id);



  return (
    <div className="">
      <div className="">
        <Image src={`${item?.bigImg}`} width={800} height={100} alt="" className="w-[100%]" />
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full mx-auto px-[0.8rem] sm:px-[3rem] lg:px-[5rem] py-[2rem] mt-[2rem] md:mt-[3rem] md:mb-[3rem]">
        <div className="flex flex-col w-full md:w-[66%] xl:w-[55%]">
          <div className="flex justify-between">
            <p className="px-[1rem] md:px-[2rem] text-[0.5rem] md:text-[1rem] py-[0.5rem] text-[#000000] rounded-md bg-[#0000001A]">
              {" "}
              Overview
            </p>
            <p className="px-[1rem] md:px-[2rem] text-[0.5rem] md:text-[1rem] py-[0.5rem] text-[#000000] rounded-md bg-[#0000001A]">
              {" "}
              Overview
            </p>
            <p className="px-[1rem] md:px-[2rem] text-[0.5rem] md:text-[1rem] py-[0.5rem] text-[#000000] rounded-md bg-[#0000001A]">
              {" "}
              Overview
            </p>
            <p className="px-[1rem] md:px-[2rem] text-[0.5rem] md:text-[1rem] py-[0.5rem] text-[#ffff] rounded-md bg-[#49BBBD]">
              {" "}
              Overview
            </p>
          </div>
          <div className=" p-[2rem] bg-[#9DCCFF4D] rounded-2xl mt-[2rem]">
            <div className="flex flex-col sm:flex-row justify-between">
              <div className=" bg-[#ffff] p-[1.5rem] rounded-xl flex flex-col gap-1 items-center">
                <h1 className="text-[1.5rem] font-medium text-[#000000bb]">
                  4 Out of 5
                </h1>
                <Image src={star} alt="" className="w-[6rem]" />
                <p>Top Raiting</p>
              </div>
              <div className="items-center w-full mt-[2rem] sm:mt-[0] sm:w-[70%]">
                <div className="flex gap-[1rem] xl:gap-[3rem] items-center w-[100%] ">
                  <p className="text-[#393939]">5 Stars</p>
                  <div className="w-[76%] h-[0.5rem] bg-[#0000004b] rounded-md">
                    <div className="bg-[#49BBBD] w-[70%] h-[100%] rounded-s-lg"></div>
                  </div>
                </div>
                <div className="flex gap-[1rem] xl:gap-[3rem]  items-center ">
                  <p className="text-[#393939]">4 Stars</p>
                  <div className="w-[76%] h-[0.5rem] bg-[#0000004b] rounded-md">
                    <div className="bg-[#49BBBD] w-[70%] h-[100%] rounded-s-lg"></div>
                  </div>
                </div>
                <div className="flex gap-[1rem] xl:gap-[3rem] items-center">
                  <p className="text-[#393939]">3 Stars</p>
                  <div className="w-[76%] h-[0.5rem] bg-[#0000004b] rounded-md">
                    <div className="bg-[#49BBBD] w-[70%] h-[100%] rounded-s-lg"></div>
                  </div>
                </div>
                <div className="flex gap-[1rem] xl:gap-[3rem] items-center">
                  <p className="text-[#393939]">2 Stars</p>
                  <div className="w-[76%] h-[0.5rem] bg-[#0000004b] rounded-md">
                    <div className="bg-[#49BBBD] w-[70%] h-[100%] rounded-s-lg"></div>
                  </div>
                </div>
                <div className="flex gap-[1rem] xl:gap-[3rem] items-center">
                  <p className="text-[#393939]">1 Stars</p>
                  <div className="w-[76%] h-[0.5rem] bg-[#0000004b] rounded-md">
                    <div className="bg-[#49BBBD] w-[70%] h-[100%] rounded-s-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-[2rem] flex flex-col gap-[1.5rem]">
              <div className="flex justify-between items-center">
                <div className="flex">
                  <Image src={mark} alt="" />
                  <div className="">
                    <p className="font-medium">Lina</p>
                    <Image src={star} alt="star" className="w-[6rem]" />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <FaRegClock className="text-[#393939]" />
                  <p className="text-[#393939]">3 Month</p>
                </div>
              </div>
              <p className="text-[#393939]">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
            </div>
            <div className=" mt-[2rem] flex flex-col gap-[1.5rem]">
              <div className="flex justify-between items-center">
                <div className="flex">
                  <Image src={mark} alt="" />
                  <div className="">
                    <p className="font-medium">Lina</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <FaRegClock className="text-[#393939]" />
                  <p className="text-[#393939]">3 Month</p>
                </div>
              </div>
              <p className="text-[#393939]">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-[25%] bg-[#fff] p-[1rem] rounded-lg mt-[3rem] md:mt-[-18rem]">
          <div className=" flex flex-col gap-[1.8rem]">
            <Image src={`${item?.image}`} width={100} height={100} alt="Image" className="w-full"></Image>
            <div className="flex md:flex-col lg:flex-row items-center gap-5">
              <span className="font-medium text-[1.8rem]">$49.65</span>
              <span className="text-[#393939]">
                <s>$99.99</s>
              </span>
              <span className="text-[#393939]">50% Off</span>
            </div>
            <p className="text-center text-[#49BBBD]">
              {item?.title}
            </p>
            <Link
              href="/checkout"
              className="w-full rounded-md mx-auto p-[0.5rem] bg-[#49BBBD] text-[#fff] text-center"
            >
              Buy Now
            </Link>
            <hr className="border-[#000]" />
            <div className="flex flex-col gap-2">
              <h2 className="font-medium text-[1.2rem]">
                This Course included
              </h2>
              <div className="flex flex-col gap-1">
                <div className="flex gap-1 text-[0.7rem] items-center">
                  <FaSun className="text-[#49BBBD]" />
                  <p className="text-[#393939]">Money Back Guarantee</p>
                </div>
                <div className="flex gap-1 text-[0.7rem] items-center">
                  <FaCamera className="text-[#49BBBD]" />
                  <p className="text-[#393939]">Access on all devices</p>
                </div>
                <div className="flex gap-1 text-[0.7rem] items-center">
                  <FaFileAlt className="text-[#49BBBD]" />
                  <p className="text-[#393939]">
                    Certification of completion
                  </p>
                </div>
                <div className="flex gap-1 text-[0.7rem] items-center">
                  <FaChartBar className="text-[#49BBBD]" />
                  <p className="text-[#393939]">32 Moduls</p>
                </div>
              </div>
            </div>
            <hr className="border-[#000]" />
            <div className="">
              <h2 className="font-medium text-[1.2rem]">
                Training 5 or more people
              </h2>
              <p className="text-[0.7rem] text-[#393939]">
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
              </p>
            </div>
            <hr className="border-[#000]" />
            <h2 className="font-medium text-[1.2rem]">Share this course</h2>
            <div className="flex gap-4 md:gap-0 md:justify-between lg:justify-start lg:gap-4">
              <FaFacebook />
              <FaFacebook />
              <FaFacebook />
              <FaFacebook />
              <FaFacebook />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseId;



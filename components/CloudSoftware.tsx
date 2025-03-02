"use client"

import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaFileInvoice, FaCalendarAlt } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";

const CloudSoftware = () => {

  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView, mainControl]);


  return (
    <motion.div
    ref={ref}
      variants={{
        hidden: { y: 40, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      initial="hidden"
      animate={mainControl}
      transition={{ duration: 2.5, type: "spring" }}
      className="px-[0.8rem] sm:px-[3rem] lg:px-[5rem] mt-[5rem] md:mt-[10rem]"
      >
      <div className="text-center flex flex-col gap-[-0.8rem] md:gap-[1rem] ">
        <h1 className="text-[1.5rem] md:text-[2rem] font-medium text-[#2F327D]">
          All-In-One <span className="text-[#00CBB8]">Cloud Software.</span>
        </h1>
        <h5 className="md:w-[70%] lg:w-[50%] mx-auto text-[0.7rem] md:text-[1.2rem] text-[#696984]">
          TOTC is one powerful online software suite that combines all the tools
          needed to run a successful school or office.
        </h5>
      </div>
      <div className="mt-[5rem] md:mt-[7rem] flex flex-col md:flex-row justify-between w-[100%] md:w-auto md:max-w-[80rem] mx-auto">

        <div className="items-center py-[2rem] md:p-[3rem] rounded-lg md:bg-[#fff] shadow-sm shadow-[#00000034] md:shadow-[#00000018] w-[100%] md:w-auto md:max-w-[20rem] p-[0.2rem] lg:p-[1rem]">
          <div className="bg-[#5B72EE] p-[1rem] w-[4rem] rounded-full h-[4rem] z-10 mx-auto mt-[-4rem] items-center">
            <FaFileInvoice className="text-[2rem] text-center text-[#ffff]" />
          </div>
          <div className="mt-[2rem]">
            <h2 className="text-center mt-[1rem] font-bold text-[1.5rem] text-[#2F327D]">
              Online Billing, Invoicing, & Contracts
            </h2>
            <p className="w-[70%] md:w-[75%] mx-auto text-center text-[0.8rem] items-center mt-4 text-[#393939]">
              Simple and secure control of your organization’s financial and
              legal transactions. Send customized invoices and contracts
            </p>
          </div>
        </div>
        <div className="items-center py-[2rem] md:p-[3rem] rounded-lg md:bg-[#fff] shadow-sm shadow-[#00000034] md:shadow-[#00000018] w-[100%] md:w-auto md:max-w-[20rem] p-[0.2rem] lg:p-[1rem] mt-[3rem] md:mt-0">
          <div className="bg-[#00CBB8] p-[1rem] w-[4rem] rounded-full h-[4rem] z-10 mx-auto mt-[-4rem] items-center">
            <FaCalendarAlt className="text-[2rem] text-center text-[#ffff]" />
          </div>
          <div className="mt-[2rem]">
            <h2 className="text-center mt-[1rem] font-bold text-[1.5rem] text-[#2F327D]">
              Online Billing, Invoicing, & Contracts
            </h2>
            <p className="w-[70%] md:w-[75%] mx-auto text-center text-[0.8rem] items-center mt-4 text-[#393939]">
              Simple and secure control of your organization’s financial and
              legal transactions. Send customized invoices and contracts
            </p>
          </div>
        </div>
        <div className="items-center py-[2rem] md:p-[3rem] rounded-lg md:bg-[#fff] shadow-sm shadow-[#00000034] md:shadow-[#00000018] w-[100%] md:w-auto md:max-w-[20rem] p-[0.2rem] lg:p-[1rem] mt-[3rem] md:mt-0">
          <div className="bg-[#29B9E7] p-[1rem] w-[4rem] rounded-full h-[4rem] z-10 mx-auto mt-[-4rem] items-center">
            <MdGroups2 className="text-[2rem] text-center text-[#ffff]" />
          </div>
          <div className="mt-[2rem]">
            <h2 className="text-center mt-[1rem] font-bold text-[1.5rem] text-[#2F327D]">
              Online Billing, Invoicing, & Contracts
            </h2>
            <p className="w-[70%] md:w-[75%] mx-auto text-center text-[0.8rem] items-center mt-4 text-[#393939]">
              Simple and secure control of your organization’s financial and
              legal transactions. Send customized invoices and contracts
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CloudSoftware;
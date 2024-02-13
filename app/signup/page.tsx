"use client";
import { SignUp } from "@clerk/nextjs";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import React from "react";

function page() {
  return (
    <>
      <div className="flex  justify-center h-full">
        <SignUp />
      </div>

      <div className="border-t-[4px] -mt-[70px] border-white  hidden  md:block">
        <div className="flex justify-evenly gap-4 p-3">
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col p-3 text-[30px] font-bold text-white cursor-pointer text-xl">
              Abhishek Khandare
            </div>
            <div className=" flex flex-row space-x-[15px] text-white">
              <a
                href={"https://github.com/Abhishek-M-K"}
                target={"_blank"}
                className="cursor-pointer"
              >
                <GithubIcon size={30} />
              </a>
              <a
                href={"https://www.linkedin.com/in/abhishekkhandare"}
                target={"_blank"}
                className="cursor-pointer"
              >
                <LinkedinIcon size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;

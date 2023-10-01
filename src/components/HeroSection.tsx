import Image from "next/image";
import Link from "next/link";
import "./../app/globals.css";

export default function HeroSection() {
  return (
    <div className="flex items-center mt-10 md:mt-0 md:h-[80vh] justify-center">
      <div className="md:w-[50%] w-[100%]">
        <div>
          <p className="text-2xl font-semibold opacity-70">
            Take your <span className="text-primary opacity-100">skills</span>{" "}
            to the
          </p>

          <p className="text-6xl font-bold">
            Next Level <span className=" text-primary">Today</span>
          </p>
          <div className="flex mt-2 gap-1">
            <p className="font-semibold opacity-70 mt-1">By Joining </p>
            <span className="text-5xl text-primary font-bold">CourseBay</span>
          </div>
        </div>
        <div className="flex gap-10 flex-col">
          <div className="mt-12 font-semibold text-gray-700 text-sm">
            Community of 10k+ Learners
            <div className="mt-10 text-white "></div>
          </div>
        </div>
      </div>

      <div className="md:block hidden w-[50%]">
        <Image src="/bg.png" width={600} height={350} alt="study" />
      </div>
    </div>
  );
}

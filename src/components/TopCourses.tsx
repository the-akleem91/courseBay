import Link from "next/link";
import CourseCard from "./CourseCard";
import { BsArrowUpRight } from "react-icons/bs";
export default function TopCourses() {
  return (
    <div className="md:mt-20 mt-24 ">
      <div>
        <p className="font-bold text-primary text-center uppercase md:text-md text-xl">
          Top Courses
        </p>
        <p className="text-center md:text-3xl text font-medium mt-3 text-gray-600">
          Explore Our Handpicked Top selling Courses
        </p>
      </div>
      <div className="md:mt-9 mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 justify-center ">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <div className="mt-12 text-center">
        <Link
          href={"/courses"}
          className="text-primary font-semibold md:text-xl border-2  py-2  px-4 border-primary rounded-[10rem] hover:border-secondary hover:text-secondary transition"
        >
          Explore All Courses
        </Link>
      </div>
    </div>
  );
}

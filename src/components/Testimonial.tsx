import TestimonialCard from "./TestomonialCard";

export default function Testimonial() {
  return (
    <div className="md:mt-[8rem] mt-20 md:flex justify-between items-start">
      <div className="md:w-[33%]">
        <p className="font-bold text-primary uppercase md:ml-1 text-xl ">
          2000+ Happy Learners
        </p>
        <p className="md:text-3xl text font-medium mt-2 text-gray-600">
          Our student's success stories speak volumes about our courses
        </p>
      </div>
      <div className="md:gap-14 gap-8 flex md:flex-row flex-col items-center mt-10 md:mt-0">
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}

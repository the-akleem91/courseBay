import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";

export default function TestimonialCard() {
  return (
    <div className="w-[22rem] shadow-custom px-7 py-6 rounded-md flex flex-col gap-6 ">
      <div>
        <RiDoubleQuotesL size={30} className="text-primary" />
        <p className="text-gray-500 font-medium mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          iusto voluptatibus alias quo! Enim, aut labore ab similique tempore
          aliquid nisi laborum? Odit commodi illo doloribus rerum.
        </p>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <Image
          width={60}
          height={60}
          src={"/test.jpeg"}
          className="rounded-[50%]"
          alt="testimonial"
        />
        <div>
          <p className="font-bold text-gray-900">Akleem Khan</p>
          <p className="text-xs font-medium text-gray-600">Web Developer</p>
        </div>
      </div>
    </div>
  );
}

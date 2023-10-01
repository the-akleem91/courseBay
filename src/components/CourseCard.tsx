import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";

export default function CourseCard() {
  return (
    <div className={`fex flex-col w-[16rem] px-3 py-2 rounded shadow-custom`}>
      <div className="">
        <img src={"/portfolio.png"} alt="pic" className="rounded" />
      </div>
      <p className="font-bold text-xl mt-2">Web Development</p>
      <p className="text-sm font-semibold opacity-70">Harkirat Singh</p>
      <p className="mt-2 flex">
        <span className="text-[#ffd900e0]">
          <MdStarRate size={19} />
        </span>
        <span className="font-semibold text-[1rem]">4.5</span>
        <span className="text-[0.7rem] font-medium text-gray-500 my-auto ml-1 font-mono">
          (12039)
        </span>
      </p>

      <div className="mt-3">
        <span className="font-bold text-primary opacity-80">₹2700</span>
        <strike className="text-xs opacity-70 ml-1">₹3600</strike>
      </div>
      <div className="flex items-center mt-4 justify-between gap-5">
        <Link
          href={"/"}
          className="bg-primary text-white font-medium px-4 py-2 text-md rounded-[10rem] text-center grow hover:bg-secondary transition mb-2"
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
}

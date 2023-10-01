"use client";
import React from "react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Statistics() {
  const [numberArray, setNumberArray] = useState([0, 0, 0, 0]);

  const increaseNumber = (numbers: number[]) => {
    const c = [1000, 20, 800, 500];

    setNumberArray((prevNumberArray) => {
      const shouldClearInterval = prevNumberArray.every(
        (currentValue, index) => {
          return currentValue < c[index];
        }
      );

      // Return the new array after mapping
      return prevNumberArray.map((currentValue, index) => {
        if (currentValue < c[index]) {
          return currentValue + 1;
        } else {
          if (shouldClearInterval) {
            clearInterval(interval as NodeJS.Timeout);
          }
          return currentValue;
        }
      });
    });
  };

  let interval: NodeJS.Timeout | null = null; // Define the interval variable

  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: ".stat-box",
      endTrigger: ".stat-box",
      start: "top 90%",
      end: "bottom 20%",
      toggleActions: "restart reverse restart reverse",
      onEnter: () => {
        // Start the interval when the scroll trigger is entered
        interval = setInterval(() => {
          increaseNumber([100, 80, 100]);
        }, 15);
      },
      onLeave: () => {
        // Stop and clear the interval when the scroll trigger is left

        clearInterval(interval as NodeJS.Timeout);
      },
      onEnterBack: () => {
        setNumberArray([0, 0, 0, 0]);
        interval = setInterval(() => {
          increaseNumber([100, 80, 100]);
        }, 15);
      },
      onLeaveBack: () => {
        setNumberArray([0, 0, 0, 0]);
        interval = setInterval(() => {
          increaseNumber([100, 80, 100]);
        }, 15);
      },
    });

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval as NodeJS.Timeout);
      scrollTrigger.kill(); // Clean up the ScrollTrigger on component unmount
    };
  }, []);
  return (
    <>
      {/* Statistics Section: Simple Dark */}
      <div>
        <div className="">
          <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            <div className="grid grid-cols-1 sm:grid-cols-4 text-center divide-y sm:divide-y-0 sm:divide-x dark:divide-gray-700/75">
              <dl className="space-y-1 px-5 py-8">
                <dt className="font-ann text-4xl font-extrabold text-primary ">
                  {numberArray[0]}+
                </dt>
                <dd className="font-an text-sm uppercase tracking-wide font-semibold dark:text-gray-700">
                  Students Joined
                </dd>
              </dl>
              <dl className="space-y-1 px-5 py-8">
                <dt className="font-ann text-4xl font-extrabold text-primary ">
                  {numberArray[1]}+
                </dt>
                <dd className="font-an text-sm uppercase tracking-wide font-semibold text-gray-700">
                  Online Courses
                </dd>
              </dl>
              <dl className="space-y-1 px-5 py-8">
                <dt className="font-ann text-4xl font-extrabold text-primary">
                  {numberArray[2]}+
                </dt>
                <dd className="font-an text-sm uppercase tracking-wide font-semibold text-gray-700">
                  Student Certified
                </dd>
              </dl>
              <dl className="space-y-1 px-5 py-8">
                <dt className="font-ann text-4xl font-extrabold text-primary">
                  {numberArray[3]}+
                </dt>
                <dd className="font-an text-sm uppercase tracking-wide font-semibold text-gray-700">
                  Reviews
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

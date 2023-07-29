"use client";
import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiSolidPhone } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const OurTeam = () => {
  const [team, setTeam] = useState([
    {
      name: "Jacob Austin",
      role: "Custom Advisor",
      email: "jacob@vehica.com",
      phone: "(123) 345-6789",
      image: "/jacob.jpg",
    },
    {
      name: "Kate Smith",
      role: "Custom Advisor",
      email: "kate@vehica.com",
      phone: "(123) 345-6789",
      image: "/kate.jpg",
    },
    {
      name: "Romi Kundu",
      role: "Custom Advisor",
      email: "romi@vehica.com",
      phone: "(123) 345-6789",
      image: "/romi.jpg",
    },
    {
      name: "George Brown",
      role: "Custom Advisor",
      email: "george@vehica.com",
      phone: "(123) 345-6789",
      image: "/george.jpg",
    },
    {
      name: "Isabella Evans",
      role: "Custom Advisor",
      email: "romi@vehica.com",
      phone: "(123) 345-6789",
      image: "/evans.jpg",
    },
    {
      name: "Emily Res",
      role: "Custom Advisor",
      email: "romi@vehica.com",
      phone: "(123) 345-6789",
      image: "/emily.jpg",
    },
  ]);
  const itemsPerPage = 3; // Number of team members to display per page
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    // Calculate the new start index for the previous page
    const newStartIndex =
      (startIndex - itemsPerPage + team.length) % team.length;
    setStartIndex(newStartIndex);
  };
  const handleNext = () => {
    // Calculate the new start index for the next page
    const newStartIndex = (startIndex + itemsPerPage) % team.length;
    setStartIndex(newStartIndex);
  };
  return (
    <div className="px-0 md:px-5 ">
      <div className="bg-[#0F141E] z-5 flex flex-col md:flex-row gap-[50px] pt-[100px] pb-[150px] pl-0 md:pl-16 rounded-0 md:rounded-[20px]">
        <div className="flex flex-col gap-8 pl-4">
          <h2 className="text-white text-[45px] leading-[45px] font-bold">
            Our team
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <AiFillCheckCircle color="#FF4605" />
              <p className="text-gray-400 text-[20px]">
                Praesent nibh luctus viverra
              </p>
            </div>
            <div className="flex items-center gap-4">
              <AiFillCheckCircle color="#FF4605" />
              <p className="text-gray-400 text-[20px]">Adipiscing elit</p>
            </div>
            <div className="flex items-center gap-4">
              <AiFillCheckCircle color="#FF4605" />
              <p className="text-gray-400 text-[20px]">
                Tempor incididunt ut labore
              </p>
            </div>
            <div className="flex items-center gap-4">
              <AiFillCheckCircle color="#FF4605" />
              <p className="text-gray-400 text-[20px]">
                Quis ipsum suspendisseviverra
              </p>
            </div>
            <div className="flex items-center gap-4">
              <AiFillCheckCircle color="#FF4605" />
              <p className="text-gray-400 text-[20px]">Maecenas ac</p>
            </div>
          </div>
          <button className="flex gap-2 px-6 py-3 bg-[#FF4605] text-white rounded-md w-max mr-auto">
            learn More
          </button>
          <div className="hidden md:flex gap-4 mt-8">
            <button
              className="w-12 h-12 flex items-center justify-center bg-white  rounded-full text-white hover:shadow-2xl hover:shadow-[#F2F5FB]"
              onClick={handlePrev}
            >
              <BsChevronLeft color="#000" size={20} />
            </button>
            <button
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-white hover:shadow-2xl hover:shadow-[#F2F5FB]"
              onClick={handleNext}
            >
              <BsChevronRight color="#000" size={20} />
            </button>
          </div>
        </div>
        <div
          className="flex flex-col items-center md:items-start md:flex-row z-20 gap-4 mr-0 md:mr-[-300px]"
          style={{ minWidth: "min-content" }}
        >
            {team
              .slice(startIndex, startIndex + itemsPerPage)
              .map((teamMember) => (
                <div
                >
                  <div className="bg-white rounded-lg overflow-hidden w-full transform hover:-translate-y-5 transition duration-500 ease-in-out">
                    <div className="">
                      <img src={teamMember.image} className="object-cover" />
                      <div className="flex gap-4 items-center mt-[-25px] pl-[30px]">
                        <div className="bg-[#FF4605] rounded-[10px] flex items-center justify-center w-12 h-12">
                          <BiSolidPhone color="#fff" size={30} />
                        </div>
                        <div className="bg-[#FF4605] rounded-[10px] flex items-center justify-center w-12 h-12">
                          <MdEmail color="#fff" size={30} />
                        </div>
                      </div>
                    </div>
                    <div className="py-8">
                      <h2 className="mx-6 font-bold text-[20px]">
                        {teamMember.name}
                      </h2>
                      <p className="mx-6 mb-3 text-gray-500">
                        {teamMember.role}
                      </p>
                      <hr />
                      <div className="mt-6">
                        <p className="mx-6 text-[#FF4605] mb-2">
                          {teamMember.email}
                        </p>
                        <p className="mx-6 text-gray-500">{teamMember.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
  );
};

export default OurTeam;

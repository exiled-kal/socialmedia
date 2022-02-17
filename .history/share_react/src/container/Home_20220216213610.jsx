import React, { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";

import { Sidebar, UserProfile } from "../components";
import { client } from "../client";
import logo from "../assets/logo.png";
import Pins from "./Pins";

const Home = () => {
  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
        <UserProfile />
        <Pins />
      </div>
      <div className="flex md:hidden flex-row">
        <HiMenu/>
      </div>
    </div>
  );
};

export default Home;

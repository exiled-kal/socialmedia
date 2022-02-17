import React, { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";

import { Sidebar, UserProfile } from "../components";
import {clie}

const Home = () => {
  return (
    <div>
      <Sidebar />
      <UserProfile />
    </div>
  );
};

export default Home;
import React, { useState, useEffect } from "react";
import NavbarAfter from "../Components/Navbar/NavbarAfter";
import LinkGradient from "../Components/Assets/LinkGradient";
import ButtonGradient from "../Components/Assets/ButtonGradient";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Card from "../Components/StartupList/Card";
import axios from "axios";

const startupList = () => {
  const [lists, setLists] = useState([]);
  axios
    .get("http://localhost:3000/",{
      headers : {
        'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJ1c2VyIiwiaWF0IjoxNjc4NjkxMjY1fQ.db77MdKBk9J0-C0roE7WVPOQUrG9Eb43pS_dsgEg-iE"
      }
    })
    .then((response) => {
      setLists(response.data);
      // console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <>
    {/* {console.log(lists)} */}
      <NavbarAfter />
      <div className="my-12 shadow-xl mx-24 rounded-2xl text-Blue80 bg-StartupList bg-cover h-[60vh]">
        <div className="flex justify-center items-start flex-col h-full pl-12 w-1/2">
          <h1 className="text-4xl font-bold ">Pitch Deck Online</h1>
          <p className="text-md font-semibold my-2">
            A pitch deck online is a visual presentation that provides a concise
            overview of a business or idea to potential investors or partners
          </p>
          <LinkGradient LinkTo="/" TextLink="Continue" />
        </div>
      </div>

      <div className="search mx-24">
        <form>
          <input
            type="text"
            placeholder="Search here..."
            className="border-2 border-gray-500 w-8/12 py-2 pl-2 rounded-md"
          />
          <ButtonGradient textButton="Search"></ButtonGradient>
        </form>
      </div>

      <div className="mx-24 py-10">
        <Link to="/" className="text-xl text-Blue80 font-semibold">
          Al
        </Link>
        <Link to="/" className="text-xl text-Blue40 font-semibold ml-8">
          Food and Beverage
        </Link>
        <Link to="/" className="text-xl text-Blue40 font-semibold ml-8">
          Agriculture
        </Link>
        <Link to="/" className="text-xl text-Blue40 font-semibold ml-8">
          Property
        </Link>
        <Link to="/" className="text-xl text-Blue40 font-semibold ml-8">
          Other
        </Link>
      </div>

      <div className="justify-center items-center flex flex-wrap">
        {lists.map((list)=>(
          <Card title={list.namaStartup} description={list.description} key={list.namaStartup}/>
        ))}
      </div>
      <Footer />
    </>
  );
};
export default startupList;

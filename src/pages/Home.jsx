import React from "react";
import cyber from "../assets/banner1.jpg";
import logo from "../assets/logo.png";
import perso2 from "../assets/personajes/perso2.png";
import perso4 from "../assets/personajes/perso4.png";

function Home() {
  return (
    <div className="">
      <div className="flex justify-between items-center gap-20 py-5 px-5 bg-slate-950 text-white font-bold">
        <div className="flex items-center gap-28">
          <a href="#">
            <img className="w-[150px] h-[60px] ml-4" src={logo} alt="logo" />
          </a>
          <div className="flex gap-6 text-[20px] font-fuenteCyber">
            <a className="hover:text-cyan-500 duration-200" href="#">
              HOME
            </a>
            <a className="hover:text-cyan-500 duration-200" href="#">
              GAME INFO
            </a>
            <a className="hover:text-cyan-500 duration-200" href="#">
              NEWS
            </a>
            <a className="hover:text-cyan-500 duration-200" href="#">
              COMMUNITY
            </a>
            <a className="hover:text-cyan-500 duration-200" href="#">
              ESPORTS
            </a>
          </div>
        </div>
        <div>
          <button className="bg-cyan-500 text-white px-3 font-fuenteCyber py-1 font-bold rounded-md cursor-pointer hover:scale-105 duration-200">
            PLAY NOW
          </button>
        </div>
      </div>
      <div>
        <img className=" w-full" src={cyber} alt="banner" />
      </div>
      <div className="w-full flex items-center justify-between relative fondo1">
        <div className="w-[600px] h-svh z-0 bg-orange-200 overflow-hidden">
          <img
            src={perso2}
            className="w-full h-[1300px] pr-14 object-cover opacity-20 "
            alt="foto"
          />
        </div>
        <img
          className="absolute left-36 animate-float"
          src={perso2}
          alt="foto"
        />
        <div className="w-[700px] mr-32 z-50 text-justify">
          <h1 className="text-black text-[60px] font-fuenteCyber font-bold mb-7">
            HEROES
          </h1>
          <p className="text-black font-bold text-[26px] font-fuenteCyber">
            Cyber Hunter Heroes use unique skills to shape battlefield
            highlights. Seize the moment with precise moves.
          </p>
          <div>
            <a href="#">
              <button className="font-fuenteCyber font-bold bg-orange-300 px-12 py-1 text-[26px] mt-6 float-right">
                MORE
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between relative fondo2">
        <div className="w-[700px] ml-32 z-50 text-justify">
          <h1 className="text-black text-[60px] font-fuenteCyber font-bold mb-7">
            FEATURES
          </h1>
          <p className="text-black font-bold text-[26px] font-fuenteCyber">
            Cyber Hunter Heroes use unique skills to shape battlefield
            highlights. Seize the moment with precise moves.
          </p>
          <div>
            <a href="#">
              <button className="font-fuenteCyber font-bold bg-sky-300 px-12 py-1 text-[26px] mt-6 float-left">
                MORE
              </button>
            </a>
          </div>
        </div>
        <img
          className="absolute left-[840px] z-50 animate-float"
          src={perso4}
          alt="foto"
        />
        <div className="w-[600px] h-svh z-0 bg-sky-200 overflow-hidden">
          <img
            src={perso4}
            className="w-full h-[1300px] object-cover opacity-20"
            alt="foto"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

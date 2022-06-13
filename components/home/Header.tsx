import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Spacing from "../Spacing";

const Header = () => {
  const [bgImg, setBgImg] = useState<string>("");
  const [numBg, setNumBg] = useState<number>();

  useEffect(() => {
    switch (Math.floor(Math.random() * 4 + 1)) {
      case 1:
        setBgImg(
          "bg-[url('/images/header/small/header-1-small.jpg')] md:bg-[url('/images/header/medium/header-1-medium.jpg')] 2xl:bg-[url('/images/header/large/header-1-large.jpg')]"
        );
        setNumBg(1);
        break;
      case 2:
        setBgImg(
          "bg-[url('/images/header/small/header-2-small.jpg')] md:bg-[url('/images/header/medium/header-2-medium.jpg')] 2xl:bg-[url('/images/header/large/header-2-large.jpg')]"
        );
        setNumBg(2);
        break;
      case 3:
        setBgImg(
          "bg-[url('/images/header/small/header-3-small.jpg')] md:bg-[url('/images/header/medium/header-3-medium.jpg')] 2xl:bg-[url('/images/header/large/header-3-large.jpg')]"
        );
        setNumBg(3);
        break;
      case 4:
        setBgImg(
          "bg-[url('/images/header/small/header-4-small.jpg')] md:bg-[url('/images/header/medium/header-4-medium.jpg')] 2xl:bg-[url('/images/header/large/header-4-large.jpg')]"
        );
        setNumBg(4);
        break;
      case 5:
        setBgImg(
          "bg-[url('/images/header/small/header-5-small.jpg')] md:bg-[url('/images/header/medium/header-5-medium.jpg')] 2xl:bg-[url('/images/header/large/header-5-large.jpg')]"
        );
        setNumBg(5);
        break;
      default:
        setBgImg(
          "bg-[url('/images/header/small/header-1-small.jpg')] md:bg-[url('/images/header/medium/header-1-medium.jpg')] 2xl:bg-[url('/images/header/large/header-1-large.jpg')]"
        );
        setNumBg(1);
        break;
    }
  }, []);

  return (
    <header className={`h-screen flex flex-col justify-end text-white`}>
      <div
        className={`fixed -z-10 h-full w-full bg-cover bg-center ${bgImg} after:content-[''] after:absolute after:w-full after:h-full after:bg-gradient-to-b from-black/70 `}
      />
      <Spacing>
        <h1 className="font-semibold text-5xl md:text-8xl 2xl:text-9xl drop-shadow-md text-left bg-clip-text text-transparent bg-gradient-to-r from-white to-white/10">
          Experience. <br /> Shared.
        </h1>
        <h3 className="italic font-medium drop-shadow-md text-lg md:text-2xl mt-6 md:mt-16 text-left">
          Welcome to the Modern Group Travel Company !
        </h3>
      </Spacing>
      <span className="absolute left-2/4 -translate-x-2/4 animate-bounce border-2 border-white rounded-full w-10 h-10 flex items-center justify-center drop-shadow-md">
        <FontAwesomeIcon icon={faArrowDown} className="text-2xl" />
      </span>
    </header>
  );
};

export default Header;

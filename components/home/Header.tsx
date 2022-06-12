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
    <header
      className={`h-screen bg-cover bg-center ${bgImg} flex flex-col justify-end text-white`}
    >
      <Spacing>
        <h1 className="font-semibold text-5xl md:text-8xl 2xl:text-9xl drop-shadow-md">
          Experience. <br /> Shared.
        </h1>
        <h3 className="italic font-medium drop-shadow-md text-lg md:text-2xl mt-6 md:mt-16">
          Welcome to the Modern Group Travel Company !
        </h3>
      </Spacing>
    </header>
  );
};

export default Header;

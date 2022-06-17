import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement, useEffect, useState } from "react";
import Spacing from "./Spacing";
import { useRouter } from "next/router";

type headerProps = {
  title?: string;
  subtitle?: string;
  hScreen: boolean;
};

const Header = ({ title, subtitle, hScreen }: headerProps) => {
  const [bgImg, setBgImg] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    switch (Math.floor(Math.random() * 4 + 1)) {
      case 1:
        setBgImg(
          "bg-[url('/images/header/small/header-1-small.jpg')] md:bg-[url('/images/header/medium/header-1-medium.jpg')] 2xl:bg-[url('/images/header/large/header-1-large.jpg')]"
        );
        break;
      case 2:
        setBgImg(
          "bg-[url('/images/header/small/header-2-small.jpg')] md:bg-[url('/images/header/medium/header-2-medium.jpg')] 2xl:bg-[url('/images/header/large/header-2-large.jpg')]"
        );
        break;
      case 3:
        setBgImg(
          "bg-[url('/images/header/small/header-3-small.jpg')] md:bg-[url('/images/header/medium/header-3-medium.jpg')] 2xl:bg-[url('/images/header/large/header-3-large.jpg')]"
        );
        break;
      case 4:
        setBgImg(
          "bg-[url('/images/header/small/header-4-small.jpg')] md:bg-[url('/images/header/medium/header-4-medium.jpg')] 2xl:bg-[url('/images/header/large/header-4-large.jpg')]"
        );
        break;
      case 5:
        setBgImg(
          "bg-[url('/images/header/small/header-5-small.jpg')] md:bg-[url('/images/header/medium/header-5-medium.jpg')] 2xl:bg-[url('/images/header/large/header-5-large.jpg')]"
        );
        break;
      default:
        setBgImg(
          "bg-[url('/images/header/small/header-1-small.jpg')] md:bg-[url('/images/header/medium/header-1-medium.jpg')] 2xl:bg-[url('/images/header/large/header-1-large.jpg')]"
        );
        break;
    }
  }, []);

  let headerTheme: ReactElement;
  let titleTheme: string = "";

  switch (router.pathname) {
    case "/advice":
      headerTheme = (
        <div
          className={`fixed -z-10 h-full w-full bg-cover bg-center bg-white`}
        />
      );
      titleTheme = `bg-gradient-to-r from-black to-black/50`;
      break;
    case "/about":
      headerTheme = (
        <div
          className={`fixed top-0 -z-10 h-full w-full bg-cover bg-center bg-[url('/images/header/small/header-about-small.jpg')] md:bg-[url('/images/header/medium/header-about-medium.jpg')] 2xl:bg-[url('/images/header/large/header-about-large.jpg')] after:content-[''] after:absolute after:w-full after:h-full after:bg-gradient-to-b from-black/70`}
        />
      );
      titleTheme = `bg-gradient-to-r from-white to-white/50`;
      break;
    case "/contact":
      headerTheme = (
        <div
          className={`fixed top-0 -z-10 h-full w-full bg-cover bg-center bg-[url('/images/header/small/header-contact-small.jpg')] md:bg-[url('/images/header/medium/header-contact-medium.jpg')] 2xl:bg-[url('/images/header/large/header-contact-large.jpg')] after:content-[''] after:absolute after:w-full after:h-full after:bg-gradient-to-b from-black/70`}
        />
      );
      titleTheme = `bg-gradient-to-r from-white to-white/50`;
      break;
    default:
      headerTheme = (
        <div
          className={`fixed -z-10 h-full w-full bg-cover bg-center ${bgImg} after:content-[''] after:absolute after:w-full after:h-full after:bg-gradient-to-b from-black/70`}
        />
      );
      titleTheme = `bg-gradient-to-r from-white to-white/50`;
      break;
  }

  return (
    <header
      className={`flex flex-col justify-end text-white ${
        hScreen ? "h-screen" : "h-[70vh] md:h-[50vh] lg:h-[30rem]"
      }`}
    >
      {headerTheme}
      <Spacing>
        <h1
          className={`font-semibold z-10 text-5xl xl:w-2/4 md:text-8xl 2xl:text-9xl drop-shadow-md text-left bg-clip-text text-transparent ${titleTheme}`}
        >
          {title}
        </h1>
        <h3
          className={`italic font-medium drop-shadow-md text-lg md:text-2xl mt-6 md:mt-16 text-left bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50 ${
            hScreen ? "block" : "hidden"
          }`}
        >
          {subtitle}
        </h3>
      </Spacing>
      <span className="absolute left-2/4 -translate-x-2/4 animate-bounce border-2 border-white rounded-full w-10 h-10 flex items-center justify-center drop-shadow-md">
        <FontAwesomeIcon icon={faArrowDown} className="text-2xl" />
      </span>
    </header>
  );
};

export default Header;

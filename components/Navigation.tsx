import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGear, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navigation = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const clickOut = (e: Event) => {
      if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOut);
    return () => {
      document.addEventListener("mousedown", clickOut);
    };
  }, [isOpen]);

  const roads: {
    id: number;
    name: string;
    link: string;
    icon?: JSX.Element;
  }[] = [
    {
      id: 1,
      name: "Discover",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Travel Advice",
      link: "/travel",
    },
    {
      id: 4,
      name: "Contact",
      link: "/contact",
    },
    {
      id: 5,
      name: "Sign up",
      link: "/signup",
    },
    {
      id: 6,
      name: "Login",
      link: "/login",
    },
    {
      id: 7,
      name: "Instagram",
      link: "/",
      icon: <FontAwesomeIcon icon={faInstagram} />,
    },
    {
      id: 8,
      name: "Facebook",
      link: "/",
      icon: <FontAwesomeIcon icon={faFacebookF} />,
    },
    {
      id: 9,
      name: "Twitter",
      link: "/",
      icon: <FontAwesomeIcon icon={faTwitter} />,
    },
  ];

  return (
    <nav className="absolute max-w-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-2xl w-full left-2/4 -translate-x-2/4 pt-12 px-3 sm:px-0 flex items-start md:items-center justify-between text-white drop-shadow-md">
      <h2 className="text-3xl w-36  flex flex-col sm:flex-row">
        <b className="text-2xl font-normal sm:text-3xl sm:flex sm:items-center">
          Sash{" "}
          <FontAwesomeIcon icon={faPaperPlane} className="text-2xl sm:mx-1" />
        </b>
        Plane
      </h2>
      <div ref={ref} className="grow relative flex justify-end xl:hidden">
        <button onClick={toggle}>
          <FontAwesomeIcon
            icon={faGear}
            className="text-3xl hover:animate-spin cursor-pointer"
          />
        </button>
        {isOpen && (
          <div className="absolute w-[18.5rem] md:w-[40rem] lg:w-[48rem] right-0">
            <ul className="absolute left-0 top-24 sm:top-20">
              {roads.slice(0, 3).map((road) => {
                return (
                  <li key={road.id} className="text-lg">
                    <Link href={road.link}>{road.name}</Link>
                  </li>
                );
              })}
            </ul>
            <ul className="absolute right-0 top-20 flex flex-col items-end">
              {roads.slice(3, 6).map((road) => {
                return (
                  <li key={road.id} className="text-lg">
                    <Link href={road.link}>{road.name}</Link>
                  </li>
                );
              })}
            </ul>
            <ul className="absolute animate-fade-in-down flex justify-between items-center w-20 right-12">
              {roads.slice(6, 9).map((road) => {
                return (
                  <li key={road.id} className="text-xl">
                    <Link href={road.link}>{road.icon}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="hidden grow xl:flex justify-between items-center">
        <ul className="flex justify-center items-center w-full">
          {roads.slice(0, 3).map((road) => {
            return (
              <li
                key={road.id}
                className="relative font-semibold text-xl mr-4 hover:scale-105 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-2/4 after:bg-white after:transition-all after:ease-in after:duration-700 after:-translate-x-2/4 hover:after:w-full"
              >
                <Link href={road.link}>{road.name}</Link>
              </li>
            );
          })}
          {roads.slice(3, 6).map((road) => {
            return (
              <li
                key={road.id}
                className="font-extralight opacity-90 mr-2 hover:scale-105 hover:opacity-100 hover:font-normal"
              >
                <Link href={road.link}>{road.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="flex justify-between w-28">
          {roads.slice(6, 9).map((road) => {
            return (
              <li key={road.id} className="text-xl hover:scale-110">
                <Link href={road.link}>
                  <a>{road.icon}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

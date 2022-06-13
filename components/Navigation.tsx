import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGear, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
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

  const router = useRouter();
  // console.log(router.pathname);

  const roads: { id: number; name: string; link: string }[] = [
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
  ];

  return (
    <nav className="absolute max-w-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-2xl w-full left-2/4 -translate-x-2/4 p-6 sm:px-0 lg:pt-12 flex items-center justify-between text-white drop-shadow-md">
      <h2 className="text-2xl w-40">
        Sash <FontAwesomeIcon icon={faPaperPlane} className="text-xl" /> Plane
      </h2>
      <div ref={ref} className={`block lg:hidden`}>
        <button onClick={toggle}>
          <FontAwesomeIcon
            icon={faGear}
            className="text-3xl hover:animate-spin cursor-pointer"
          />
        </button>
        {isOpen && (
          <ul className={`absolute right-6 md:right-0 flex flex-col items-end`}>
            {roads.map((road) => {
              return (
                <li key={road.id} className="text-xl">
                  <Link href={road.link}>{road.name}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="hidden lg:flex">
        <ul className="flex items-center justify-between w-[31rem] 2xl:w-[36rem]">
          {roads.slice(0, 3).map((road) => {
            return (
              <li
                key={road.id}
                className="relative font-semibold text-xl hover:scale-105 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-2/4 after:bg-white after:transition-all after:ease-in after:duration-700 after:-translate-x-2/4 hover:after:w-full"
              >
                <Link href={road.link}>{road.name}</Link>
              </li>
            );
          })}
          {roads.slice(3, 6).map((road) => {
            return (
              <li
                key={road.id}
                className="font-extralight opacity-90 hover:scale-105 hover:opacity-100 hover:font-normal"
              >
                <Link href={road.link}>{road.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="hidden lg:flex w-32 pl-8 justify-between">
        <li className="hover:scale-105">
          <Link href={"/"}>
            <a>
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
          </Link>
        </li>
        <li className="hover:scale-105">
          <Link href={"/"}>
            <a>
              <FontAwesomeIcon icon={faFacebook} className="text-xl" />
            </a>
          </Link>
        </li>
        <li className="hover:scale-105">
          <Link href={"/"}>
            <a>
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

import { faGear, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  return (
    <nav className="absolute max-w-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-2xl w-full left-2/4 -translate-x-2/4 p-6 sm:px-0 flex items-center justify-between text-white drop-shadow-md">
      <h2 className="text-2xl ">
        Sash <FontAwesomeIcon icon={faPaperPlane} className="text-xl" /> Plane
      </h2>
      <div ref={ref}>
        <button onClick={toggle}>
          <FontAwesomeIcon
            icon={faGear}
            className="text-3xl hover:animate-spin cursor-pointer"
          />
        </button>
        {isOpen && (
          <ul className={`absolute`}>
            <li>Discover</li>
            <li>About</li>
            <li>Travel Advice</li>
            <li>Contact</li>
            <li>Sign up</li>
            <li>Log in</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

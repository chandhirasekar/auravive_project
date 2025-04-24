import { checkMobile } from "@/libs/api";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  let [isScroll, setIsScroll] = useState(false);
  const [isMenu, setMenu] = useState(false);
  let [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window != "undefined") {
      getMobile();
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", getMobile);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", getMobile);
    };
  }, [isMobile]);

  const getMobile = () => {
    let mobile = checkMobile();

    setIsMobile(mobile);
  };
  const handleScroll = () => {
    // debugger;
    if (!isMobile && window.pageYOffset > 30) {
      setIsScroll(true);
    } else if (isMobile && window.pageYOffset > 10) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  return (
    <>
      <div
        className={`  fixed top-0 left-0 right-0 ${
          isScroll
            ? "bg-green-800  shadow-xl"
            : "lg:bg-transparent md:bg-[#01321f]"
        }`}
      >
        <div className="main-width py-[10px] flex items-center justify-between">
          <div className="header_logo ">
            <Image
              src={"/auravive_icon.jpg"}
              width={60}
              height={60}
              className="border-[3px] border-[#fff] rounded-[50%] object-cover"
              alt="auravive_logo"
            />
          </div>
          <div className="lg:flex gap-[20px] md:hidden">
            <Link href={"/"} className="text-[#fff] text-[16px] font-semibold">
              Home
            </Link>
            <Link
              href={"/about-us"}
              className="text-[#fff] text-[16px] font-semibold"
            >
              About us
            </Link>
            <Link
              href={"/Contact-us"}
              className="text-[#fff] text-[16px] font-semibold"
            >
              Contact us
            </Link>
          </div>
          <div className="lg:flex gap-[2px] items-center bg-white p-[2px_8px] rounded-[5px] md:hidden ">
            <Image
              src={"/icons/whatsapp.svg"}
              width={30}
              height={25}
              alt="whatsappicon"
            />
            <p className="font-semibold text-[14px]">WhatsApp</p>
          </div>
          <div className="md:flex lg:hidden" onClick={() => setMenu(true)}>
            <Image
              src={"/icons/menuicon.svg"}
              width={30}
              height={30}
              alt="menuicon"
            />
          </div>
        </div>
      </div>
      {isMenu ? (
        <div
          className="fixed inset-0 bg-[#000] bg-opacity-50 z-[100] "
          onClick={() => setMenu(false)}
        ></div>
      ) : (
        <></>
      )}
      <div
        className={`fixed top-0 lg:hidden right-0 h-full w-[70%] bg-white shadow-lg transition-transform duration-150 z-[101] ${
          isMenu ? "translate-x-0" : "translate-x-[100%]"
        }`}
      ></div>
    </>
  );
};

export default Header;

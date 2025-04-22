import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  let [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  return (
    <div
      className={`  fixed top-0 left-0 right-0 ${
        isScroll ? "bg-green-800  shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="main-width py-[10px] flex items-center justify-between">
        <div className="header_logo ">
          <Image
            src={"/auravive_logo.png"}
            width={60}
            height={60}
            className="border-[3px] border-[#fff] rounded-[50%] object-cover"
            alt="auravive_logo"
          />
        </div>
        <div className="flex gap-[20px]">
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
        <div className="flex gap-[2px] items-center bg-white p-[2px_8px] rounded-[5px] ">
          <Image
            src={"/icons/whatsapp.svg"}
            width={30}
            height={25}
            alt="whatsappicon"
          />
          <p className="font-semibold text-[14px]">WhatsApp</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-[#01321f] pt-[120px] pb-[60px] w-[100%]  ">
        <div className=" main-width grid lg:grid-cols-2 md:grid-cols-1">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-[32px] font-bold text-[#fff]">Auravive</h1>
            <h5 className="text-[20px] font-semibold text-[#fff] py-[5px]">
              Auravive ...Nourish Naturally. 🌱
            </h5>
            <p className="text-[16px] leading-[2] text-[#fff]">
              Introducing Auravive Organic Curry Leaves Mix! 🌿✨ Elevate your
              dishes with the pure, organic goodness of nature. Discover the
              authentic flavors and health benefits of this culinary gem.
            </p>
            <p className="text-[16px] leading-[2] text-[#fff]">
              Your Daily Dose of Organic Goodness...Healthy Inside and Out,
              Naturally. Embrace the Organic Lifestyle. Shop Now...!
            </p>
            <Link
              href={"#"}
              className="flex gap-[2px] items-center bg-white p-[5px_10px] rounded-[5px] mt-[20px] "
            >
              <Image
                src={"/icons/call_in.svg"}
                width={20}
                height={20}
                alt="whatsappicon"
              />
              <p className="font-semibold text-[14px]">Contact Us</p>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <Image
                src={"/product-1.jpg"}
                width={100}
                height={100}
                alt="rightproductimage"
                className="w-[300px] rounded-t-[60%] border-[5px] p-[10px] border-[#FFf]"
                // className="mix-blend-darken"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[300vh] w-[100%]"></div>
    </>
  );
}

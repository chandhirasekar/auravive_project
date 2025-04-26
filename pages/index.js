import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef();
  let [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    let video = videoRef.current;
    if (!video) return null;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <>
      <div className="bg-[#01321f] md:pt-[80px] lg:pt-[120px] pb-[60px] w-[100%]  ">
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
      <div className="main-width  py-[30px]">
        <div>
          <div className="flex items-center justify-center gap-[20px]">
            <Image
              src={"/icons/nopreservation.png"}
              width={150}
              height={150}
              alt="added_preservatives_icon"
              className="w-[100px] h-[100px]"
            />
            <Image
              src={"/icons/eco_logo.png"}
              width={120}
              height={120}
              alt="added_preservatives_icon"
              className="w-[120px] h-[120px]"
            />
            <Image
              src={"/icons/gmo.png"}
              width={100}
              height={100}
              alt="added_preservatives_icon"
              className="w-[100px] h-[100px]"
            />
          </div>

          <h1 className="md:text-[22px] lg:text-[32px] font-semibold lg:w-[50%] mb-[20px] mx-auto text-center">
            🔥The Essence of{" "}
            <span className="text-[#01321f] font-extrabold">Organic</span>{" "}
            Living🔥
          </h1>
        </div>
        <div className="grid md:gap-[20px] lg:gap-[30px] lg:grid-cols-2 md:grid-cols-1">
          <div className="flex items-center justify-center w-full ">
            <div className="relative w-full">
              <video
                ref={videoRef}
                width="320"
                height="240"
                // controls
                className="border-[5px]  w-full  h-[400px] object-cover border-double border-[#01321f] rounded-[10px] p-[10px]"
              >
                <source
                  src="videos/productvideo.mp4"
                  type="video/mp4"
                  className=""
                />
              </video>
              <button
                onClick={togglePlayPause}
                className="absolute bottom-[2px] right-[2px] bg-[#fff] rounded-[50%] "
              >
                <Image
                  src={
                    isPlaying ? "/icons/pause_icon.png" : "/icons/play_icon.png"
                  }
                  alt="pauseplayicon"
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px]"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="md:text-[18px] lg:text-[24px] md:font-bold lg:font-semibold">
              🌱MORINGA POWDER FOR YOUR HEALTHY LIFESTYLE🌱
            </h1>
            <ul className="mt-[10px] mb-[5px]">
              <li className="text-[18px] font-semibold">🍎 ABC Malt </li>
              <li className="text-[18px] font-semibold"> 🌱Moringa Powder </li>
              <li className="text-[18px] font-semibold">🌿 Curry Leaves Mix</li>
            </ul>

            <ul className="flex flex-col gap-[5px]">
              <li className="text-[16px] font-normal">
                <span className="font-semibold">High in antioxidants:</span>
                These help combat free radicals, which can damage cells.
              </li>
              <li className="text-[16px] font-normal">
                <span className="font-semibold">Boosts the immune system:</span>
                Strengthens your body’s defenses and may help fight infections
              </li>
              <li className="text-[16px] font-normal">
                <span className="font-semibold">Protects the skin: </span>
                Shields from environmental damage and promotes healthier skin.
              </li>
              <li className="text-[16px] font-normal">
                <span className="font-semibold">Encourages hair growth:</span>
                Supports strong, healthy hair.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

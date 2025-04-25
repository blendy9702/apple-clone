import Image from "next/image";
import React from "react";

const home = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative w-full h-[600px]">
            <Image
              src="/imgs/iphone_16.jpg"
              alt="iphone"
              fill
              className="object-cover object-center"
            />
          </div>
          <Image
            src="/imgs/apple_watch.jpg"
            alt="iphone"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default home;

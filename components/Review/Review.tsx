import Image from "next/image";
import React from "react";

const Review = () => {
  return (
    <div className="flex flex-col justify-center space-y-4 bg-white rounded-lg p-5 text-black w-80">
      <div className="flex items-center space-x-4">
        <Image
          src="/skycap-man.jpeg"
          alt="skycap-man"
          width={100}
          height={100}
          className="w-14 rounded-full"
        />
        <div>
          <h1 className="text-lg font-semibold">Principal Consultant</h1>
          <p className="text-sm">@Skycap PTE.LTD</p>
        </div>
      </div>
      <div>
        <p>
          Partnering with Safire Consultants was a game-changer for our business
          success.
        </p>
      </div>
    </div>
  );
};

export default Review;

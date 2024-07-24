import Image from "next/image";
import React from "react";

const Review = () => {
  return (
    <div className="flex flex-col justify-center space-y-4 bg-white rounded-lg p-5 text-black w-64">
      <div className="flex items-center space-x-4">
        <Image src="/profile.png" alt="profile" width={100} height={100} className="w-14" />
        <div>
          <h1 className="text-lg font-semibold">John Doe</h1>
          <p className="text-sm">CEO</p>
        </div>
      </div>
      <div>
        <p>Journeying through the world, Chillhum always with me</p>
      </div>
    </div>
  );
};

export default Review;

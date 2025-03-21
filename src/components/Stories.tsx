import Image from "next/image";
import React from "react";

const Stories = () => {
  return (
    <div className=" rounded-4xl shadow-md overflow-x-scroll w-full px-6 py-2 pt-4 no-scrollbar mx-4 bg-gray-100">
      <div className="flex gap-8 w-max">
        {/* <div className="flex flex-col items-center gap-2 cursor-pointer">
          <input
            type="image"
            alt="Upload"
            className="h-16 w-16 rounded-full ring-2"
          />
          <span className="font-medium">Add Story</span>
        </div> */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/30147888/pexels-photo-30147888/free-photo-of-cowboy-silhouette-riding-at-sunset-in-ardic.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-16 h-16 rounded-full ring-2"
          />
          <span className="font-medium">Ahmed</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/30147888/pexels-photo-30147888/free-photo-of-cowboy-silhouette-riding-at-sunset-in-ardic.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-16 h-16 rounded-full ring-2"
          />
          <span className="font-medium">Ahmed</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/30147888/pexels-photo-30147888/free-photo-of-cowboy-silhouette-riding-at-sunset-in-ardic.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-16 h-16 rounded-full ring-2"
          />
          <span className="font-medium">Ahmed</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/30147888/pexels-photo-30147888/free-photo-of-cowboy-silhouette-riding-at-sunset-in-ardic.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-16 h-16 rounded-full ring-2"
          />
          <span className="font-medium">Ahmed</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/30147888/pexels-photo-30147888/free-photo-of-cowboy-silhouette-riding-at-sunset-in-ardic.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-16 h-16 rounded-full ring-2"
          />
          <span className="font-medium">Ahmed</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/30147888/pexels-photo-30147888/free-photo-of-cowboy-silhouette-riding-at-sunset-in-ardic.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-16 h-16 rounded-full ring-2"
          />
          <span className="font-medium">Ahmed</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/30147888/pexels-photo-30147888/free-photo-of-cowboy-silhouette-riding-at-sunset-in-ardic.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-16 h-16 rounded-full ring-2"
          />
          <span className="font-medium">Ahmed</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;

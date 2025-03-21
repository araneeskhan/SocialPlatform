import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed";
import Stories from "@/components/Stories";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex gap-6  ">
      <div className="hidden md:block">Left Menu</div>
      
      {/* Center Menu */}
      <div className="w-full lg:w-[70%] flex flex-col items-center rounded-2xl gap-6 py-4">
        
            <Stories />
            <AddPost />
            <Feed />
        
      </div>

      {/* Right Menu */}
      <div className="hidden md:block">Right Menu</div>
    </div>
  );
};

export default HomePage;

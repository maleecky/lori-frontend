import React from "react";
import SearchBar from "./(Dashboard components)/SearchBar";
import Support from "./(Dashboard components)/Support";
import Notifications from "./(Dashboard components)/Notifications";
import Apps from "./(Dashboard components)/Apps";
import Settings from "./(Dashboard components)/Settings";
import Profile from "./(Dashboard components)/Profile";

const DashlayoutHeader = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-4 h-[56px] bg-gray-100">
        <div className="w-full">
          <div className="flex justify-end w-full">
            <SearchBar />
            <Support />
            <Notifications />
            <Apps />
            <Settings />
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashlayoutHeader;

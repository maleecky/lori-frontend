import React from "react";
import DashlayoutHeader from "./dashboard/components/Appheader";
import DashSidebarLayout from "./dashboard/components/AppSidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="">
        <DashSidebarLayout />
      </div>
      <div className="flex-1 flex flex-col">
        <div>
          <DashlayoutHeader />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;

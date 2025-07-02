import React from "react";

import NavDesktop from "./NavDesktop";

const LayoutSection = ({
  children,
  navProps,
}: {
  children: React.ReactNode;
  navProps: any;
}) => {
  return (
    <div className="layout-page">
      <div className="layout-sidebar">
        <NavDesktop {...navProps} />
      </div>
      <div className="layout-main">
        <main className="layout-main-content">{children}</main>
      </div>
    </div>
  );
};

export default LayoutSection;

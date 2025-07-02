import React from 'react';

const LayoutSection = ({ sidebar, header, children }: { sidebar: React.ReactNode; header: React.ReactNode; children: React.ReactNode }) => {
  return (
    <div className="layout-section">
      {sidebar}
      <div className="layout-main">
        {header}
        <main className="layout-main-content">{children}</main>
      </div>
    </div>
  );
};

export default LayoutSection; 
import React from 'react';

const LayoutSection = ({ sidebar, header, children }: { sidebar: React.ReactNode; header: React.ReactNode; children: React.ReactNode }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {sidebar}
      <div style={{ flex: 1, marginLeft: 300 }}>
        {header}
        <main style={{ marginTop: 64, padding: 32 }}>{children}</main>
      </div>
    </div>
  );
};

export default LayoutSection; 
import React from 'react';
import NavDesktop from './NavDesktop';
import LayoutSection from './LayoutSection';

const DashboardLayout = ({ children, navProps }: { children: React.ReactNode, navProps: any }) => {
  return (
    <LayoutSection
      sidebar={<NavDesktop {...navProps} onSidebarClick={navProps.onSidebarClick} />}
      header={null}
    >
      {children}
    </LayoutSection>
  );
};

export default DashboardLayout; 
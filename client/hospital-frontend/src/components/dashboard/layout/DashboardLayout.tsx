import React from 'react';
import NavDesktop from './NavDesktop';
import HeaderSection from './HeaderSection';
import LayoutSection from './LayoutSection';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutSection
      sidebar={<NavDesktop />}
      header={<HeaderSection />}
    >
      {children}
    </LayoutSection>
  );
};

export default DashboardLayout; 
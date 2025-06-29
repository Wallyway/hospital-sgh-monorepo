import type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {

  return (
    <div className="app-container">
      <aside className="sidebar">
        {/* <Navigation /> */}
      </aside>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

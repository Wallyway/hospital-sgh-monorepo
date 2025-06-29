import type { ReactNode } from 'react';
import { SideNav } from '@components/navigation/SideNav';
import { useAuth } from '@contexts/AuthContext';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Si no está autenticado, solo mostrar el contenido (página de login)
    return <div className="app-container">{children}</div>;
  }

  return (
    <div className="app-container">
      <SideNav />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

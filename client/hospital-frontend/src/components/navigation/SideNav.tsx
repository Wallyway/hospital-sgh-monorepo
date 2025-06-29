import { Link } from 'react-router-dom';
import { useAuth } from '@contexts/AuthContext';
import { UserRole } from '@/types/user';

interface MenuItem {
  name: string;
  path: string;
  icon?: string;
  roles: string[];
  permissions?: string[];
}

const menuItems: MenuItem[] = [
  // Dashboard común para todos
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "🏠",
    roles: [UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT],
  },

  // Menú de Administrador
  {
    name: "Gestión de Usuarios",
    path: "/admin/users",
    icon: "👥",
    roles: [UserRole.ADMIN],
    permissions: ["manage_users"],
  },
  {
    name: "Departamentos",
    path: "/admin/departments",
    icon: "🏢",
    roles: [UserRole.ADMIN],
  },
  {
    name: "Configuración",
    path: "/admin/settings",
    icon: "⚙️",
    roles: [UserRole.ADMIN],
  },
  {
    name: "Reportes",
    path: "/admin/reports",
    icon: "📊",
    roles: [UserRole.ADMIN],
  },

  // Menú de Doctor
  {
    name: "Mis Pacientes",
    path: "/doctor/patients",
    icon: "👨‍⚕️",
    roles: [UserRole.DOCTOR],
    permissions: ["view_patients"],
  },
  {
    name: "Agenda",
    path: "/doctor/appointments",
    icon: "📅",
    roles: [UserRole.DOCTOR],
  },
  {
    name: "Historiales Médicos",
    path: "/doctor/medical-records",
    icon: "📋",
    roles: [UserRole.DOCTOR],
    permissions: ["edit_medical_records"],
  },
  {
    name: "Prescripciones",
    path: "/doctor/prescriptions",
    icon: "💊",
    roles: [UserRole.DOCTOR],
    permissions: ["prescribe_medication"],
  },

  // Menú de Paciente
  {
    name: "Mis Citas",
    path: "/patient/appointments",
    icon: "📅",
    roles: [UserRole.PATIENT],
  },
  {
    name: "Mi Historial",
    path: "/patient/medical-history",
    icon: "📄",
    roles: [UserRole.PATIENT],
  },
  {
    name: "Resultados de Laboratorio",
    path: "/patient/lab-results",
    icon: "🧪",
    roles: [UserRole.PATIENT],
  },
  {
    name: "Agendar Cita",
    path: "/patient/book-appointment",
    icon: "📞",
    roles: [UserRole.PATIENT],
  },
];

export const SideNav = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  // Filtrar elementos del menú según el rol y permisos del usuario
  const visibleItems = menuItems.filter((item) => {
    // Verificar si el usuario tiene el rol necesario
    const hasRequiredRole = item.roles.includes(user.role);
    
    // Verificar permisos si están especificados
    const hasRequiredPermissions = !item.permissions || 
      item.permissions.every(permission => user.permissions?.includes(permission));
    
    return hasRequiredRole && hasRequiredPermissions;
  });

  return (
    <nav className="side-nav">
      <div className="nav-header">
        <h2>Hospital SGH</h2>
        <div className="user-info">
          <span className="user-name">{user.name}</span>
          <span className="user-role">{user.role}</span>
          {user.department && (
            <span className="user-department">{user.department}</span>
          )}
        </div>
      </div>

      <ul className="nav-menu">
        {visibleItems.map((item) => (
          <li key={item.path} className="nav-item">
            <Link to={item.path} className="nav-link">
              {item.icon && <span className="nav-icon">{item.icon}</span>}
              <span className="nav-text">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-footer">
        <button onClick={logout} className="logout-btn">
          <span className="nav-icon">🚪</span>
          <span className="nav-text">Cerrar Sesión</span>
        </button>
      </div>
    </nav>
  );
};

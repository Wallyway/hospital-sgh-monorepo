import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CancelIcon from "@mui/icons-material/Cancel";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DescriptionIcon from "@mui/icons-material/Description";
import PeopleIcon from "@mui/icons-material/People";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ListAltIcon from "@mui/icons-material/ListAlt";

interface MenuItem {
  text: string;
  icon: React.ReactNode;
  to: string;
}

interface NavDesktopProps {
  avatarUrl: string;
  nombre: string;
  onSidebarClick?: (text: string) => void;
  menuItems?: MenuItem[];
}

const patientItems: MenuItem[] = [
  { text: "Agenda cita", icon: <EventNoteIcon />, to: "/patient/agendar" },
  {
    text: "Citas pendientes",
    icon: <PendingActionsIcon />,
    to: "/patient/citas-pendientes",
  },
  {
    text: "Modificar sus datos",
    icon: <ManageAccountsIcon />,
    to: "/patient/modificar-datos",
  }
];

const medicItems: MenuItem[] = [
  { text: "Agenda", icon: <CalendarMonthIcon />, to: "/medic/agenda" },
  {
    text: "Solicitar equipos",
    icon: <MedicalServicesIcon />,
    to: "/medic/equipos",
  },
];

const pAdminItems: MenuItem[] = [
  { text: "Consultar médicos", icon: <PeopleIcon />, to: "/padmin/consultar-medicos" },
  { text: "Consultar agenda médicos", icon: <CalendarMonthIcon />, to: "/padmin/consultar-agenda-medicos" },
  { text: "Gestionar citas pacientes", icon: <EventAvailableIcon />, to: "/padmin/gestionar-citas-pacientes" },
  { text: "Agregar pacientes", icon: <GroupAddIcon />, to: "/padmin/agregar-pacientes" },
  { text: "Consultar pacientes", icon: <ListAltIcon />, to: "/padmin/consultar-pacientes" },
  { text: "Modificar datos pacientes", icon: <EditNoteIcon />, to: "/padmin/modificar-datos-pacientes" },
];

const NavDesktop: React.FC<NavDesktopProps> = ({
  avatarUrl,
  nombre,
  onSidebarClick,
  menuItems,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [popoverText, setPopoverText] = useState("");
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const path = window.location.pathname;

  let items: MenuItem[] = [];
  if (path.includes("patient")) {
    items = patientItems;
  }
  if (path.includes("medic")) {
    items = medicItems;
  }
  if (path.includes("padmin")) {
    items = pAdminItems;
  }

  let sortedItems = items;
  let listSx = { width: "100%", flexGrow: 1 };
  let listStyle = undefined;
  if (menuItems) {
    listStyle = {
      overflowY: "auto" as "auto",
      overflowX: "hidden" as "hidden",
      maxHeight: "calc(90vh - 180px)",
    };
  }

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement>,
    text: string
  ) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setAnchorEl(event.currentTarget);
    setPopoverText(text);
  };

  const handlePopoverClose = () => {
    closeTimeout.current = setTimeout(() => {
      setAnchorEl(null);
      setPopoverText("");
    }, 120);
  };

  return (
    <Box
      className="sidebar"
      sx={{
        width: 80,
        bgcolor: "#fff",
        // height: "90vh",
        position: "relative",
        borderRadius: 4,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
        transition: "width 0.2s",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Avatar src={avatarUrl} alt={nombre} className="sidebar-avatar" />
      </Box>
      <Divider sx={{ width: "100%" }} />
      <List className="sidebar-list" sx={listSx} style={listStyle}>
        {sortedItems.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            className="sidebar-list-item"
          >
            <div className="sidebar-item-wrapper">
              <Link
                to={item.to}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="sidebar-icon-btn"
                  onClick={() => onSidebarClick && onSidebarClick(item.text)}
                  onMouseEnter={(e) => handlePopoverOpen(e, item.text)}
                  onMouseLeave={handlePopoverClose}
                >
                  {item.icon}
                </div>
              </Link>
              {popoverText === item.text && anchorEl && (
                <div className="sidebar-popover">{item.text}</div>
              )}
            </div>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ width: "100%", mb: 1 }} />
      <Box
        className="sidebar-logout"
        sx={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <IconButton
          color="error"
          sx={{ mb: 1, width: 72, height: 80, fontSize: 32 }}
          onClick={() => onSidebarClick && onSidebarClick("Cerrar sesión")}
        >
          <PowerSettingsNewIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavDesktop;

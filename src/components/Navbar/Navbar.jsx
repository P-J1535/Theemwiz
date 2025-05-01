import React, { useState } from "react";
import styles from "./Navbar.module.css";
import {
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import NavLogo from "../../assets/Images/logo.png";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about-us" },
    { label: "Services", path: "/latest-work" },
    { label: "Pricing", path: "/pricing" },
    { label: "Blog", path: "/how-we-work" },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <Link to="/">
          <img className={styles.logo} src={NavLogo} alt="Nav-Logo" />
        </Link>

        <div className={styles.desktopLinks}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.link} ${
                location.pathname === item.path ? styles.active : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link to="/contact">
          <Button variant="outlined" className={styles.contact}>
            Contact
          </Button>
        </Link>
        <div className={styles.menuIcon}>
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </div>

        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <div className={styles.drawer}>
            <List>
              {navItems.map((item) => (
                <ListItem button key={item.path} onClick={toggleDrawer(false)}>
                  <Link
                    to={item.path}
                    className={`${styles.drawerLink} ${
                      location.pathname === item.path ? styles.active : ""
                    }`}
                  >
                    <ListItemText primary={item.label} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;

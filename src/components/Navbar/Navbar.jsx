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

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const navItems = [
    // { label: "Home", path: "/" },
    { label: "About", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Pricing", path: "/pricing" },
    { label: "Blog", path: "/blog" },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <Link to="/">
          <img className={styles.logo} src={NavLogo} alt="Nav-Logo" />
        </Link>

        {/* Desktop Links */}
        <div className={styles.desktopLinks}>
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Button variant="outlined" className={styles.contact}>
          Contact
        </Button>

        {/* Hamburger Icon for Mobile */}
        {/* Hamburger Icon for Mobile */}
        <div className={styles.menuIcon}>
          <IconButton onClick={toggleDrawer(true)} color="inherit">
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </div>

        {/* Drawer for Mobile Links */}
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <div className={styles.drawer}>
            <List>
              {navItems.map((item) => (
                <ListItem button key={item.path} onClick={toggleDrawer(false)}>
                  <Link to={item.path} className={styles.drawerLink}>
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

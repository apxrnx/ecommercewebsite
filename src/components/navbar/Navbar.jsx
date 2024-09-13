import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { IoIosHeartEmpty } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { BsBoxSeam, BsStar } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import Dropdown from "../dropdown/Dropdown";
import search from "../../assets/search.svg";
import { useSelector } from "react-redux";
import {
  ClickAwayListener,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const cart = useSelector((state) => state.cart);

  const isActive = (path) =>
    location.pathname === path ? styles.navActive : "";

  return (
    <main className={styles.main}>
      <div className={styles.navStrip}>
        <div className={styles.navStripText}>
          <div className={styles.stripText}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span>ShopNow</span>
          </div>
          <div className={styles.stripDrpdwn}>
            <Dropdown arr={[]} />
          </div>
        </div>
      </div>
      <div className={styles.navMain}>
        <div className={styles.navChild}>
          <div className={styles.navLeft}>
            <Link to={"/"}>
              <div className={styles.navLogo}>Exclusive</div>
            </Link>
            <div className={styles.navLinks}>
              <Link to={"/"}>
                <p className={isActive("/")}>Home</p>
              </Link>
              <Link to={"/contact"}>
                <p className={isActive("/contact")}>Contact</p>
              </Link>
              <Link to={"/about"}>
                <p className={isActive("/about")}>About</p>
              </Link>
              <Link to={"/signUp"}>
                <p className={isActive("/signUp")}>Sign Up</p>
              </Link>
              <Link to={"/login"}>
                <p className={isActive("/login")}>Login</p>
              </Link>
            </div>
          </div>
          <div className={styles.navRight}>
            <div className={styles.searchbar}>
              <input type="text" placeholder="What are you looking for?" />
              <img src={search} alt="" />
            </div>
            <div className={styles.navIcons}>
              <Link to={"/wishlist"}>
                <IoIosHeartEmpty style={{ width: "24px", height: "24px" }} />
              </Link>
              <Link to={"/cart"}>
                <div className={styles.navIcons_cart}>
                  <BsCart3 style={{ width: "24px", height: "24px" }} />
                  <div className={styles.navIcons_cart_count}>{cart.items.length}</div>
                </div>
              </Link>
              <div style={{ position: "relative" }}>
                <VscAccount
                  style={{ width: "24px", height: "24px", cursor: "pointer" }}
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                />
                {isDropdownOpen && (
                  <ClickAwayListener onClickAway={() => setDropdownOpen(false)}>
                    <div className={styles.dropdownMenu}>
                      <ul>
                        <Link
                          to={"/account"}
                          onClick={() => {
                            setDropdownOpen(false);
                          }}
                        >
                          <li>
                            <VscAccount />
                            Manage My Account
                          </li>
                        </Link>
                        <li>
                          <BsBoxSeam />
                          My Order
                        </li>
                        <li>
                          <MdCancel />
                          My Cancellations
                        </li>
                        <li>
                          <BsStar />
                          My Reviews
                        </li>
                      </ul>
                    </div>
                  </ClickAwayListener>
                )}
              </div>
            </div>
          </div>
          <div className={styles.hamburgerIcon}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <Drawer
              className={styles.navDrawer}
              anchor="right"
              open={isOpen}
              onClose={() => setOpen(false)}
            >
              <List className={styles.drawerList}>
                <ListItem button onClick={() => setOpen(false)}>
                  <Link to="/">
                    <ListItemText
                      disableTypography
                      primary="Home"
                      className={`${styles.drawer_listItem} ${isActive("/")}`}
                    />
                  </Link>
                </ListItem>
                <ListItem button onClick={() => setOpen(false)}>
                  <Link to="/about">
                    <ListItemText
                      disableTypography
                      primary="About"
                      className={`${styles.drawer_listItem} ${isActive(
                        "/about"
                      )}`}
                    />
                  </Link>
                </ListItem>
                <ListItem button onClick={() => setOpen(false)}>
                  <Link to="/contact">
                    <ListItemText
                      primary="Contact"
                      disableTypography
                      className={`${styles.drawer_listItem} ${isActive(
                        "/contact"
                      )}`}
                    />
                  </Link>
                </ListItem>
                <ListItem button onClick={() => setOpen(false)}>
                  <Link to="/wishlist">
                    <ListItemText
                      primary="Wishlist"
                      disableTypography
                      className={`${styles.drawer_listItem} ${isActive(
                        "/wishlist"
                      )}`}
                    />
                  </Link>
                </ListItem>
                <ListItem button onClick={() => setOpen(false)}>
                  <Link to="/cart">
                    <ListItemText
                      primary="Cart"
                      disableTypography
                      className={`${styles.drawer_listItem} ${isActive(
                        "/cart"
                      )}`}
                    />
                  </Link>
                </ListItem>
                <ListItem button onClick={() => setOpen(false)}>
                  <Link to="/signUp">
                    <ListItemText
                      disableTypography
                      primary="Sign Up"
                      className={`${styles.drawer_listItem} ${isActive(
                        "/signUp"
                      )}`}
                    />
                  </Link>
                </ListItem>
                <ListItem button onClick={() => setOpen(false)}>
                  <Link to="/login">
                    <ListItemText
                      disableTypography
                      primary="Login"
                      className={`${styles.drawer_listItem} ${isActive(
                        "/login"
                      )}`}
                    />
                  </Link>
                </ListItem>
              </List>
            </Drawer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;

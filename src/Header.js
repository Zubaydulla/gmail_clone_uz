import React from "react";
import "./Header.scss";
import IconButton from "@mui/material/IconButton";
import {
  Apps,
  HelpOutline,
  Menu,
  Search,
  SettingsOutlined,
  TuneSharp,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setUserlogout, userlog } from "./features/userSlice";
import { Avatar } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";

function Header() {
  const userLogged = useSelector(userlog);
  const dispatch = useDispatch();
  const signOutVar = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(setUserlogout());
      })
      .catch((error) => {
        // An error happened.
        alert(error.message);
      });
  };

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="Gmail Logo"
        />
      </div>
      <div className="header__middle">
        <IconButton>
          <Search className="header__middle-search" />
        </IconButton>
        <input type="text" placeholder="Search mail" />
        <IconButton>
          <TuneSharp className="header__middle-list" />
        </IconButton>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutline />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton onClick={signOutVar}>
          <Avatar src={userLogged?.photoUrl} />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;

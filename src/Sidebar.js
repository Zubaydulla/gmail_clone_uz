import {
  AccessTime,
  CreateOutlined,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
import "./Sidebar.scss";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<CreateOutlined fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={Star} title="Starred" number={34} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={34} />
      <SidebarOption Icon={LabelImportant} title="Important" number={34} />
      <SidebarOption Icon={NearMe} title="Sent" number={34} />
      <SidebarOption Icon={Note} title="Drafts" number={34} />
      <SidebarOption Icon={ExpandMore} title="More" number={34} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

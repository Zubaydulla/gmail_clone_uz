import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  InboxOutlined,
  KeyboardHide,
  LocalOfferOutlined,
  MoreVert,
  PeopleAltOutlined,
  Redo,
  Settings,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import "./EmailList.scss";
import EmailRow from "./EmailRow";
import { db } from "./firebase";
import Section from "./Section";

function EmailList() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("timestamp", "desc"));
    onSnapshot(collection(db, "emails"), q, (snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section
          Icon={InboxOutlined}
          title="Primary"
          color="red"
          selected={true}
        />
        <Section Icon={PeopleAltOutlined} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferOutlined} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toGMTString()}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;

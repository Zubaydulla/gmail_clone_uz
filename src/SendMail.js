import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import "./SendMail.scss";

function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    addDoc(collection(db, "emails"), {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>Send Message</h3>
        <Close
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onClick={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To"
          name="to"
          {...register("to", {
            required: true,
          })}
        />
        {errors.to && <p className="sendMail__error">To is Required!</p>}
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          {...register("subject", {
            required: true,
          })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is required!</p>
        )}
        <input
          type="text"
          placeholder="Message"
          name="message"
          className="sendMail__message"
          {...register("message", {
            required: true,
          })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is required</p>
        )}
        <div className="sendMail_options">
          <Button className="sendMail__send">Send</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;

import React, { useEffect } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import EmailList from "./EmailList";

import "./App.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import SendMail from "./SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { setUserlogin, userlog } from "./features/userSlice";
import Login from "./Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const userlogged = useSelector(userlog);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        dispatch(
          setUserlogin({
            displayname: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, [dispatch]);

  const Layout = () => {
    return (
      <>
        {!userlogged ? (
          <Login />
        ) : (
          <div className="app">
            <Header />
            <div className="app__body">
              <Sidebar />
              <Outlet />
              {sendMessageIsOpen && <SendMail />}
            </div>
          </div>
        )}
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <EmailList />,
        },
        {
          path: "/mail",
          element: <Mail />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

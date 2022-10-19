import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React, { useEffect } from "react";
import NotFoundPage from "./components/Common/NotFoundPage";
import Main from "./components/Main/Main";
import Log from "./components/Log/Log";
import Nav from "./components/Common/Nav";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  useEffect(() => {
    console.log(app.name);
  }, []);

  return (
    // <BrowserRouter>
    //
    //
    //     <Switch>
    //       <Redirect from="/" to="/main" />
    //       <Route path="/main" component={Main} />
    //       <Route path="*" component={NotFoundPage} />
    //     </Switch>
    //
    // </BrowserRouter>

    <BrowserRouter>
      <Nav />
      <div className="contents">
        <Routes>
          <Route path="/" element={<Navigate replace to="main" />} />
          <Route path="main/*" element={<Main />} />
          <Route path="log/*" element={<Log />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable DarkMode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleNavMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Enable LightMode");
      showAlert("Dark mode enabled", "success");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "#fff";
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      setModeText("Enable DarkMode");
      showAlert("Light mode enabled", "success");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleNavMode={toggleNavMode}
          modeText={modeText}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

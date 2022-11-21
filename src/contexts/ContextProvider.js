import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notifications: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  // start Mode colors context
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = ($e) => {
    setCurrentMode($e.target.value);
    localStorage.setItem("themeMode", $e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  // end mode colors

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

//     "@syncfusion/ej2": "^19.4.48",
//     "@syncfusion/ej2-react-calendars": "^19.4.48",
//     "@syncfusion/ej2-react-charts": "^19.4.54",
//     "@syncfusion/ej2-react-dropdowns": "^19.4.52",
//     "@syncfusion/ej2-react-grids": "^19.4.56",
//     "@syncfusion/ej2-react-inputs": "^19.4.52",
//     "@syncfusion/ej2-react-kanban": "^19.4.48",
//     "@syncfusion/ej2-react-popups": "^19.4.52",
//     "@syncfusion/ej2-react-richtexteditor": "^19.4.50",
//     "@syncfusion/ej2-react-schedule": "^19.4.50",

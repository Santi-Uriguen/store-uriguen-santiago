import Header from "./components/header/Header.js";
import Main from "./components/main/Main.js";
import "./styles/App.css";
import React from "react";
import UserContextProvider from "./context/UserContext.js";
import ProdContextProvider from "./context/ProductContext.js";

function App() {
  return (
    <UserContextProvider>
      <ProdContextProvider>
        <div className="App">
          <Header />
          <Main />
        </div>
      </ProdContextProvider>
    </UserContextProvider>
  );
}

export default App;
